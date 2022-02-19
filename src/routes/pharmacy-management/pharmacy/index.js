const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const pharmacyController = require('../../../controllers/pharmacy-management/pharmacy');
const {
	createPharmacySchema,
	updatePharmacySchema,
} = require('../../../validations/pharmacy-management/pharmacy');

router.post(
	'/create',
	authentication,
	validation(createPharmacySchema),
	pharmacyController.createPharmacy
);

router.get('/get-all', authentication, pharmacyController.getAllPharmacy);

router.get('/get/:id', authentication, pharmacyController.getSinglePharmacy);

router.patch(
	'/update/:id',
	authentication,
	validation(updatePharmacySchema),
	pharmacyController.updatePharmacy
);

router.delete('/delete/:id', authentication, pharmacyController.deletePharmacy);

module.exports = router;
