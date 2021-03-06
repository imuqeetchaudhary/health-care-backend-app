const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveDrInDepart = async ({ departmentId, doctorId, actionPerformedBy }) => {
	const drInDepart = {
		departmentId,
		doctorId,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newDrInDepart = await db.DrInDepart.create({ ...drInDepart });
		return newDrInDepart;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Doctor in department already exists',
			});
		}
		throw err;
	}
};

exports.listAllDrInDepart = () => {
	return db.DrInDepart.findAll({
		attributes: ['drInDepartId'],
		include: [
			{
				model: db.Department,
				attributes: ['departmentId', 'departmentName'],
			},
			{
				model: db.Doctor,
				attributes: ['doctorId', 'userId'],
				include: [
					{
						model: db.User,
						attributes: [
							'userId',
							'email',
							'displayName',
							'isActive',
							'isAdmin',
							'isSuperuser',
						],
					},
				],
			},
		],
	});
};

exports.findById = ({ id }) => {
	return db.DrInDepart.findByPk(id, {
		attributes: ['drInDepartId'],
		include: [
			{
				model: db.Department,
				attributes: ['departmentId', 'departmentName'],
			},
			{
				model: db.Doctor,
				attributes: ['doctorId', 'userId'],
				include: [
					{
						model: db.User,
						attributes: [
							'userId',
							'email',
							'displayName',
							'isActive',
							'isAdmin',
							'isSuperuser',
						],
					},
				],
			},
		],
	});
};

exports.findByDoctorId = ({ id }) => {
	return db.DrInDepart.findOne({
		where: {
			doctorId: id,
		},
		attributes: ['drInDepartId'],
		include: [
			{
				model: db.Department,
				attributes: ['departmentId', 'departmentName'],
			},
			{
				model: db.Doctor,
				attributes: ['doctorId', 'userId'],
				include: [
					{
						model: db.User,
						attributes: [
							'userId',
							'email',
							'displayName',
							'isActive',
							'isAdmin',
							'isSuperuser',
						],
					},
				],
			},
		],
	});
};

exports.findByDepId = ({ id }) => {
	return db.DrInDepart.findAll({
		where: {
			departmentId: id,
		},
		attributes: ['drInDepartId'],
		include: [
			{
				model: db.Department,
			},
			{
				model: db.Doctor,
				include: [
					{
						model: db.User,
						
					},
					{
						model: db.Specialization,
					},
					{
						model: db.Qualification,
					},
					{
						model: db.DiseaseTreatedByDr,
						include: db.Disease
					}
				],
			},
		],
	});
};

exports.updateDrInDepart = async ({
	drInDepartId,
	departmentId,
	doctorId,
	actionPerformBy,
}) => {
	const drInDepart = {
		departmentId,
		doctorId,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedDrInDepart = await db.DrInDepart.update(
			{ ...drInDepart },
			{ where: { doctorId: drInDepartId } }
		);

		if (dbUtils.isRecordFound(updatedDrInDepart))
			throw new Exceptions.NotFound({
				message: 'Doctor in department not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'Doctor in department already exists',
			});
		throw err;
	}
};

exports.deleteDrInDepart = async ({ drInDepartId }) => {
	try {
		const deleteDrInDepart = await db.DrInDepart.destroy({
			where: { doctorId: drInDepartId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete doctor in department unless delete all its reference",
			});
		}
		throw err;
	}
};

exports.deleteDrInDepartByDr = async ({ drInDepartId }) => {
	try {
		const deleteDrInDepart = await db.DrInDepart.destroy({
			where: { doctorId: drInDepartId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete doctor in department unless delete all its reference",
			});
		}
		throw err;
	}
};

const _prop = {
	HIDDEN_FIELDS: ['createdAt', 'updatedAt'],
	hideFieldsCondition: function (...args) {
		return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
	},
};
