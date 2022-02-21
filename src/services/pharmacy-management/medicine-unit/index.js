const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveMedicineUnit = async ({
	medicineId,
	unitId,
	unitNumber,
	pricePerUnit,
	medTotalNumber,
	actionPerformedBy,
}) => {
	const medicineUnit = {
		medicineId,
		unitId,
		unitNumber,
		pricePerUnit,
		medTotalNumber,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newMedicineUnit = await db.MedicineUnit.create({ ...medicineUnit });
		return newMedicineUnit;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'MedicineUnit already exists',
			});
		}
		throw err;
	}
};

exports.listAllMedicineUnit = () => {
	return db.MedicineUnit.findAll({
		include: [{ model: db.Medicine }, { model: db.Unit }],
	});
};

exports.findById = ({ id }) => {
	return db.MedicineUnit.findByPk(id, {
		include: [{ model: db.Medicine }, { model: db.Unit }],
	});
};

exports.findByMedicineId = ({ medicineId }) => {
	return db.MedicineUnit.findOne({
		where: { medicineId },
		include: [{ model: db.Medicine }, { model: db.Unit }],
	});
};

exports.updateMedicineUnit = async ({
	medicineId,
	unitId,
	unitNumber,
	pricePerUnit,
	medTotalNumber,
	actionPerformBy,
}) => {
	const medicineUnit = {
		medicineId,
		unitId,
		unitNumber,
		pricePerUnit,
		medTotalNumber,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedMedicineUnit = await db.MedicineUnit.update(
			{ ...medicineUnit },
			{ where: { medicineId } }
		);

		if (dbUtils.isRecordFound(updatedMedicineUnit))
			throw new Exceptions.NotFound({ message: 'MedicineUnit not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({ message: 'MedicineUnit already exists' });
		throw err;
	}
};

exports.deleteMedicineUnit = async ({ medicineId }) => {
	try {
		const deleteMedicineUnit = await db.MedicineUnit.destroy({
			where: { medicineId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete MedicineUnit unless delete all its reference",
			});
		}
		throw err;
	}
};
