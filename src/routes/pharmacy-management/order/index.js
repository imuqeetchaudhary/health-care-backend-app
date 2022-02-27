const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const orderController = require('../../../controllers/pharmacy-management/order');
const {
	createOrderSchema,
	updateOrderSchema,
} = require('../../../validations/pharmacy-management/order');

router.post(
	'/create',
	authentication,
	validation(createOrderSchema),
	orderController.createOrder
);

router.get('/get-all', authentication, orderController.getAllOrder);

router.get(
	'/get-all-for-pharmacy/:pharmacyId',
	authentication,
	orderController.getAllOrderForPharmacy
);

router.get('/get-all-for-user', authentication, orderController.getAllOrderForUser);

router.get('/get/:id', authentication, orderController.getSingleOrder);

router.delete('/delete/:id', authentication, orderController.deleteOrder);

module.exports = router;
