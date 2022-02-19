const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveUnit = async ({ description, actionPerformedBy }) => {
	const unit = {
		description,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newUnit = await db.Unit.create({ ...unit });
		return newUnit;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Unit already exists',
			});
		}
		throw err;
	}
};

exports.listAllUnit = () => {
	return db.Unit.findAll();
};

exports.findById = ({ id }) => {
	return db.Unit.findByPk(id);
};

exports.updateUnit = async ({ unitId, description, actionPerformBy }) => {
	const unit = {
		description,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedUnit = await db.Unit.update({ ...unit }, { where: { unitId } });

		if (dbUtils.isRecordFound(updatedUnit))
			throw new Exceptions.NotFound({ message: 'Unit not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({ message: 'Unit already exists' });
		throw err;
	}
};

exports.deleteUnit = async ({ unitId }) => {
	try {
		const deleteUnit = await db.Unit.destroy({
			where: { unitId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Unit unless delete all its reference",
			});
		}
		throw err;
	}
};
