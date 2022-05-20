const express = require('express');
const router = express.Router();
const { upload } = require('../../../middlewares/upload');
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const postController = require('../../../controllers/vendor/post');
const {
	createPostSchema,
	updatePostSchema,
} = require('../../../validations/vendor/post');

router.post(
	'/create',
	authentication,
	validation(createPostSchema),
	postController.createPost
);

router.get('/get-all', authentication, postController.getAllPost);

router.get(
	'/get-all-by-hospital-admin/:id',
	authentication,
	postController.getAllPostByHospitalAdmin
);

router.get(
	'/get-all-by-category',
	authentication,
	postController.getAllPostByCategory
);

router.get('/get/:id', authentication, postController.getSinglePost);

router.patch(
	'/update/:id',
	authentication,
	validation(updatePostSchema),
	postController.updatePost
);

router.delete('/delete/:id', authentication, postController.deletePost);

module.exports = router;
