const userService = require('../../../services/user-management/user');
const { promise } = require('../../../middlewares/promise');
const Exceptions = require('../../../utils/custom-exceptions');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.register = promise(async (req, res) => {
	const { email, password, displayName, isAdmin, isSuperuser } = req.body;
	const createdBy = req.user.userId;

	const hashPassword = bcrypt.hashSync(password, 10);

	const user = await userService.saveUser({
		email,
		password: hashPassword,
		displayName,
		isAdmin,
		isSuperuser,
		createdBy,
	});

	res.status(200).json({
		message: 'Successfully created new user',
		user,
	});
});

exports.registerForMobile = promise(async (req, res) => {
	const { email, password, displayName, isAdmin, isSuperuser } = req.body;

	const hashPassword = bcrypt.hashSync(password, 10);

	const user = await userService.saveUser({
		email,
		password: hashPassword,
		displayName,
		isAdmin,
		isSuperuser,
	});

	res.status(200).json({
		message: 'Successfully created new user',
		user,
	});
});

exports.uploadImage = promise(async (req, res) => {
	const { id } = req.params;
	const userId = id;
	const image = req.file.filename;
	const uploadImage = await userService.uploadImage({
		userId,
		image,
	});
	res.status(200).json({ message: 'Successfully uploaded image' });
});

exports.updateUser = promise(async (req, res) => {
	const { id } = req.params;
	const { city, country, area, postalCode, phoneNumber, image, dob, gender } =
		req.body;
	const userId = id;
	const actionPerformBy = req.user.userId;

	const updateUser = await userService.updateUser({
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
	});
	res.status(200).json({ message: 'Successfully updated User' });
});

exports.login = promise(async (req, res) => {
	const { email, password } = req.body;
	const user = await userService.findByEmail({ email });

	if (!user) {
		throw new Exceptions.BadRequest({
			message: 'Your credentials not matched',
		});
	}

	const isValid = bcrypt.compareSync(password, user.password);
	if (!isValid) {
		throw new Exceptions.BadRequest({
			message: 'Your credentials not matched',
		});
	}

	const token = jwt.sign(
		{
			userId: user.userId,
			username: user.username,
			displayName: user.displayName,
			isActive: user.isActive,
			isAdmin: user.isAdmin,
			isSuperuser: user.isSuperuser,
		},
		config.get('jwt.secret')
	);

	res.status(200).json({
		token,
		user,
	});
});
exports.resetPassword = promise(async (req, res) => {
	const { userId, password } = req.body;

	const hashPassword = bcrypt.hashSync(password, 10);

	const user = await userService.resetUserPassword({
		userId,
		password: hashPassword,
	});

	res.status(200).json({
		message: 'Successfully updated password',
		user,
	});
});


exports.getSingleUserByEmail = promise(async (req, res) => {
	const { email } = req.params;

	const user = await userService.findByEmail({ email });

	res.status(200).json({ user });
});

exports.profile = promise(async (req, res) => {
	const id = req.user.userId;

	const user = await userService.findById({ id });

	res.status(200).json({ user });
});

exports.getAllUsers = promise(async (req, res) => {
	const user = await userService.listAllUsers();
	res.status(200).json({ user });
});

exports.getSingleUser = promise(async (req, res) => {
	const { id } = req.params;

	const user = await userService.findById({ id });

	res.status(200).json({ user });
});

exports.deleteUser = promise(async (req, res) => {
	const { id } = req.params;

	const deleteUser = await userService.deleteUser({ id });

	res.status(200).json({ message: 'Successfully deleted User' });
});
