const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveMedicinePharmacy = async ({
	medicineUnitId,
	pharmacyId,
	quantity,
	actionPerformedBy,
}) => {
	const medicinePharmacy = {
		medicineUnitId,
		pharmacyId,
		quantity,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newMedicinePharmacy = await db.MedicinePharmacy.create({
			...medicinePharmacy,
		});
		return newMedicinePharmacy;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Medicine In Pharmacy already exists',
			});
		}
		throw err;
	}
};

exports.listAllMedicinePharmacy = () => {
	return db.MedicinePharmacy.findAll({
		include: [{ model: db.MedicineUnit }, { model: db.Pharmacy }],
	});
};

exports.findById = ({ id }) => {
	return db.MedicinePharmacy.findByPk(id, {
		include: [{ model: db.MedicineUnit }, { model: db.Pharmacy }],
	});
};

exports.findByMedicineUnitId = ({ medicineUnitId }) => {
	return db.MedicinePharmacy.findOne({
		where: { medicineUnitId },
		include: [{ model: db.MedicineUnit }, { model: db.Pharmacy }],
	});
};

exports.updateMedicinePharmacy = async ({
	medicineUnitId,
	pharmacyId,
	quantity,
	actionPerformBy,
}) => {
	const medicinePharmacy = {
		medicineUnitId,
		pharmacyId,
		quantity,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedMedicinePharmacy = await db.MedicinePharmacy.update(
			{ ...medicinePharmacy },
			{ where: { medicineUnitId } }
		);

		if (dbUtils.isRecordFound(updatedMedicinePharmacy))
			throw new Exceptions.NotFound({ message: 'Medicine In Pharmacy not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'Medicine In Pharmacy already exists',
			});
		throw err;
	}
};

exports.deleteMedicinePharmacy = async ({ medicineUnitId }) => {
	try {
		const deleteMedicinePharmacy = await db.MedicinePharmacy.destroy({
			where: { medicineUnitId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Medicine In Pharmacy unless delete all its reference",
			});
		}
		throw err;
	}
};
