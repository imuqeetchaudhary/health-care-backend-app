const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveMedicine = async ({ medicineName, description, actionPerformedBy }) => {
	const medicine = {
		medicineName,
		description,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newMedicine = await db.Medicine.create({ ...medicine });
		return newMedicine;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Medicine already exists',
			});
		}
		throw err;
	}
};

exports.listAllMedicine = () => {
	return db.Medicine.findAll();
};

exports.findById = ({ id }) => {
	return db.Medicine.findByPk(id);
};

exports.updateMedicine = async ({
	medicineId,
	medicineName,
	description,
	actionPerformBy,
}) => {
	const medicine = { medicineName, description, updatedBy: actionPerformBy };

	try {
		const updatedMedicine = await db.Medicine.update(
			{ ...medicine },
			{ where: { medicineId } }
		);

		if (dbUtils.isRecordFound(updatedMedicine))
			throw new Exceptions.NotFound({ message: 'Medicine not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({ message: 'Medicine already exists' });
		throw err;
	}
};

exports.deleteMedicine = async ({ medicineId }) => {
	try {
		const deleteMedicine = await db.Medicine.destroy({
			where: { medicineId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Medicine unless delete all its reference",
			});
		}
		throw err;
	}
};
