const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/user-management/user');
const { upload } = require('../../../middlewares/upload');
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const {
	registerSchema,
	loginSchema,
	updateUserSchema,
} = require('../../../validations/user-management/user');

router.post(
	'/register',
	authentication,
	validation(registerSchema),
	userController.register
);

router.post(
	'/register-for-mobile',
	validation(registerSchema),
	userController.registerForMobile
);

router.patch(
	'/upload/:id',
	authentication,
	upload.single('image'),
	userController.uploadImage
);

router.patch(
	'/update/:id',
	authentication,
	validation(updateUserSchema),
	userController.updateUser
);
router.post(
	'/reset-password',
	userController.resetPassword
);

router.get('/getByEmail/:email', userController.getSingleUserByEmail);


router.post('/login', validation(loginSchema), userController.login);

router.get('/profile', authentication, userController.profile);

router.get('/get-all', authentication, userController.getAllUsers);

router.get('/get/:id', authentication, userController.getSingleUser);

router.delete('/delete/:id', authentication, userController.deleteUser);

module.exports = router;
