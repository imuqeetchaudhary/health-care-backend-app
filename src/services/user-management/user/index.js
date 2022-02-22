const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.saveUser = async ({
	email,
	password,
	displayName,
	isAdmin,
	isSuperuser,
	createdBy,
}) => {
	const user = {
		username: email,
		email,
		password,
		displayName,
		isAdmin,
		isSuperuser,
	};

	try {
		const newUser = await db.User.create({ ...user });
		return newUser;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({ message: 'User already exists' });
		}
		throw err;
	}
};

exports.uploadImage = async ({ userId, image }) => {
	const user = {
		image,
	};

	try {
		const updatedUser = await db.User.update({ ...user }, { where: { userId } });

		if (dbUtils.isRecordFound(updatedUser))
			throw new Exceptions.NotFound({ message: 'user not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({ message: 'user already exists' });
		throw err;
	}
};

exports.updateUser = async ({
	userId,
	city,
	country,
	area,
	postalCode,
	phoneNumber,
	image,
	dob,
	gender,
	actionPerformBy,
}) => {
	const user = {
		city,
		country,
		area,
		postalCode,
		phoneNumber,
		image,
		dob,
		gender,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedUser = await db.User.update({ ...user }, { where: { userId } });

		if (dbUtils.isRecordFound(updatedUser))
			throw new Exceptions.NotFound({
				message: 'User not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'User already exists',
			});
		throw err;
	}
};

exports.findByEmail = ({ email }) => {
	return db.User.findOne({
		where: { email },
		..._prop.hideFieldsCondition(),
	});
};
exports.resetUserPassword = async ({
	userId,
	password
}) => {

	try {
		const updatedUser = await db.User.update({ password: password }, { where: { userId } });

		if (dbUtils.isRecordFound(updatedUser))
			throw new Exceptions.NotFound({
				message: 'User not found',
			});
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({
				message: 'User already exists',
			});
		throw err;
	}
};
exports.findByEmail = ({ email }) => {
	return db.User.findOne({where : {email: email }});
};

exports.listAllUsers = () => {
	return db.User.findAll({
		where: { isSuperuser: false },
		..._prop.hideFieldsCondition(),
	});
};

exports.findById = ({ id }) => {
	return db.User.findByPk(id, _prop.hideFieldsCondition('password'));
};

exports.deleteUser = async ({ id: userId }) => {
	try {
		const deleteUser = await db.User.destroy({
			where: { userId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete User unless delete all its reference",
			});
		}
		throw err;
	}
};

const _prop = {
	HIDDEN_FIELDS: ['createdAt', 'updatedAt', 'authType', 'email'],
	hideFieldsCondition: function (...args) {
		return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
	},
};
