const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveOrder = async ({
	userId,
	pharmacyId,
	area,
	city,
	country,
	postalCode,
	status,
	isPaid,
	medicine,
	actionPerformedBy,
}) => {
	let transaction;
	const order = {
		userId,
		pharmacyId,
		area,
		city,
		country,
		postalCode,
		status,
		isPaid,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};
	try {
		transaction = await db.sequelize.transaction();
		const newOrder = await db.Order.create({ ...order }, { transaction });

		const medicineOrder = medicine.map(med => {
			return {
				orderId: newOrder.dataValues.orderId,
				medicineUnitId: med.muId,
				quantity: med.quantity,
				createdBy: actionPerformedBy,
				updatedBy: actionPerformedBy,
			};
		});

		const newMedicineOrder = await db.MedicineOrder.bulkCreate(medicineOrder, {
			transaction,
		});

		await transaction.commit();

		return { order: newOrder, medicineInOrder: [...newMedicineOrder] };
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Order already exists',
			});
		}
		throw err;
	}
};

exports.listAllOrder = () => {
	return db.Order.findAll();
};

exports.listAllOrderForPharmacy = ({ pharmacyId }) => {
	return db.Order.findAll({ where: { pharmacyId } });
};

exports.listAllOrderForUser = ({ userId }) => {
	return db.Order.findAll({ where: { userId } });
};

exports.findById = async ({ id }) => {
	const order = await db.Order.findByPk(id, {
		include: [{ model: db.User }, { model: db.Pharmacy }],
	});
	const medicineInOrder = await db.MedicineOrder.findAll({
		where: { orderId: id },
		include: [{ model: db.MedicineUnit, include: [{ model: db.Medicine }] }],
	});

	return { order, medicineInOrder };
};

exports.deleteOrder = async ({ orderId }) => {
	try {
		const deleteOrder = await db.Order.destroy({
			where: { orderId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Order unless delete all its reference",
			});
		}
		throw err;
	}
};
