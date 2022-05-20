const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.savePost = async ({
	title,
	description,
	category,
	estimatedPrice,
	status,
	dueDtae,
	actionPerformedBy,
}) => {
	const post = {
		title,
		description,
		category,
		estimatedPrice,
		status,
		dueDtae,
		hospitalAdminId: actionPerformedBy,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newPost = await db.Post.create({
			...post,
		});
		return newPost;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Post already exists',
			});
		}
		throw err;
	}
};

exports.listAllPost = () => {
	return db.Post.findAll({
		include: [
			{
				model: db.User,
			},
		],
	});
};

exports.listAllPostByCategory = ({ category }) => {
	return db.Post.findAll({
		include: [
			{
				model: db.User,
			},
		],
		where: { category },
	});
};

exports.listAllPostByHospitalAdmin = ({ hospitalAdminId }) => {
	return db.Post.findAll({
		include: [
			{
				model: db.User,
			},
		],
		where: { hospitalAdminId },
	});
};

exports.findById = ({ id }) => {
	return db.Post.findByPk(id, {
		include: [
			{
				model: db.User,
			},
		],
	});
};

exports.updatePost = async ({
	postId,
	title,
	description,
	category,
	estimatedPrice,
	status,
	dueDtae,
	actionPerformedBy,
}) => {
	const post = {
		postId,
		title,
		description,
		category,
		estimatedPrice,
		status,
		dueDtae,
		hospitalAdminId: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const updatedPost = await db.Post.update({ ...post }, { where: { PostId } });

		if (dbUtils.isRecordFound(updatedPost))
			throw new Exceptions.NotFound({
				message: 'Post not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'Post already exists',
			});
		throw err;
	}
};

exports.deletePost = async ({ postId }) => {
	try {
		const deletePost = await db.Post.destroy({
			where: { postId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Post unless delete all its reference",
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
