const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveResponse = async ({
	price,
	description,
	status,
	postId,
	dueDtae,
	actionPerformedBy,
}) => {
	const response = {
		price,
		description,
		status,
		postId,
		dueDtae,
		vendorId: actionPerformedBy,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newResponse = await db.Response.create({
			...response,
		});
		return newResponse;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Response already exists',
			});
		}
		throw err;
	}
};

exports.listAllResponse = () => {
	return db.Response.findAll({
		include: [
			{
				model: db.User,
			},
			{
				model: db.Post,
			},
		],
	});
};

exports.listAllResponseByPostId = ({ postId }) => {
	return db.Response.findAll({
		include: [
			{
				model: db.User,
			},
			{
				model: db.Post,
			},
		],
		where: { postId },
	});
};

exports.findById = ({ id }) => {
	return db.Response.findByPk(id, {
		include: [
			{
				model: db.User,
			},
		],
	});
};

exports.updateResponse = async ({
	responseId,
	price,
	description,
	status,
	postId,
	dueDtae,
	actionPerformedBy,
}) => {
	const response = {
		responseId,
		price,
		description,
		status,
		postId,
		dueDtae,
		vendorId: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const updatedResponse = await db.Response.update(
			{ ...response },
			{ where: { responseId } }
		);

		if (dbUtils.isRecordFound(updatedResponse))
			throw new Exceptions.NotFound({
				message: 'Response not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'Response already exists',
			});
		throw err;
	}
};

exports.deleteResponse = async ({ responseId }) => {
	try {
		const deleteResponse = await db.Response.destroy({
			where: { responseId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Response unless delete all its reference",
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
