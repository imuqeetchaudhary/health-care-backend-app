const express = require('express');
const router = express.Router();
const { upload } = require('../../../middlewares/upload');
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const responseController = require('../../../controllers/vendor/response');
const {
	createResponseSchema,
	updateResponseSchema,
} = require('../../../validations/vendor/response');

router.post(
	'/create',
	authentication,
	validation(createResponseSchema),
	responseController.createResponse
);

router.get('/get-all', authentication, responseController.getAllResponse);

router.get(
	'/get-all-by-post/:id',
	authentication,
	responseController.getAllResponseByPostId
);

router.get('/get/:id', authentication, responseController.getSingleResponse);

router.patch(
	'/update/:id',
	authentication,
	validation(updateResponseSchema),
	responseController.updateResponse
);

router.delete('/delete/:id', authentication, responseController.deleteResponse);

module.exports = router;
