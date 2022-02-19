const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const unitController = require('../../../controllers/pharmacy-management/unit');
const {
	createUnitSchema,
	updateUnitSchema,
} = require('../../../validations/pharmacy-management/unit');

router.post(
	'/create',
	authentication,
	validation(createUnitSchema),
	unitController.createUnit
);

router.get('/get-all', authentication, unitController.getAllUnit);

router.get('/get/:id', authentication, unitController.getSingleUnit);

router.patch(
	'/update/:id',
	authentication,
	validation(updateUnitSchema),
	unitController.updateUnit
);

router.delete('/delete/:id', authentication, unitController.deleteUnit);

module.exports = router;
