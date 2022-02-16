const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveDiseaseTreatedByDr = async ({
	diseaseId,
	doctorId,
	actionPerformedBy,
}) => {
	const diseaseTreatedByDr = {
		diseaseId,
		doctorId,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newDiseaseTreatedByDr = await db.DiseaseTreatedByDr.create({
			...diseaseTreatedByDr,
		});
		return newDiseaseTreatedByDr;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Disease Treated By Doctor already exists',
			});
		}
		throw err;
	}
};

exports.listAllDiseaseTreatedByDr = () => {
	return db.DiseaseTreatedByDr.findAll({
		attributes: ['dtbdId'],
		include: [
			{
				model: db.Disease,
				attributes: [
					'diseaseId',
					'diseaseName',
					'diseaseDescription',
					'diseaseSymptoms',
					'diseaseCauses',
					'diseaseType',
					'riskFactor',
				],
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
	return db.DiseaseTreatedByDr.findByPk(id, {
		attributes: ['dtbdId'],
		include: [
			{
				model: db.Disease,
				attributes: [
					'diseaseId',
					'diseaseName',
					'diseaseDescription',
					'diseaseSymptoms',
					'diseaseCauses',
					'diseaseType',
					'riskFactor',
				],
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

exports.findByDrId = ({ id }) => {
	return db.DiseaseTreatedByDr.findAll({
		where: {
			doctorId: id,
		},
		attributes: ['dtbdId'],
		include: [
			{
				model: db.Disease,
				attributes: [
					'diseaseId',
					'diseaseName',
					'diseaseDescription',
					'diseaseSymptoms',
					'diseaseCauses',
					'diseaseType',
					'riskFactor',
				],
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
exports.updateDiseaseTreatedByDr = async ({
	diseaseTreatedByDrId,
	diseaseId,
	doctorId,
	actionPerformBy,
}) => {
	const diseaseTreatedByDr = {
		diseaseId,
		doctorId,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedDiseaseTreatedByDr = await db.DiseaseTreatedByDr.update(
			{ ...diseaseTreatedByDr },
			{ where: { doctorId: diseaseTreatedByDrId } }
		);

		if (dbUtils.isRecordFound(updatedDiseaseTreatedByDr))
			throw new Exceptions.NotFound({
				message: 'Disease Treated By Doctor not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'Disease Treated By Doctor already exists',
			});
		throw err;
	}
};

exports.deleteDiseaseTreatedByDr = async ({ diseaseTreatedByDrId }) => {
	try {
		const deleteDiseaseTreatedByDr = await db.DiseaseTreatedByDr.destroy({
			where: { doctorId: diseaseTreatedByDrId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message:
					"Can't delete Disease Treated By Doctor unless delete all its reference",
			});
		}
		throw err;
	}
};

exports.deleteDiseaseTreated = async ({ diseaseTreatedByDrId }) => {
	try {
		const deleteDiseaseTreatedByDr = await db.DiseaseTreatedByDr.destroy({
			where: { doctorId: diseaseTreatedByDrId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message:
					"Can't delete Disease Treated By Doctor unless delete all its reference",
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
