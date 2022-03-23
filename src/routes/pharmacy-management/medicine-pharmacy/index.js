const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const medicinePharmacyController = require('../../../controllers/pharmacy-management/medicine-pharmacy');
const {
	createMedicinePharmacySchema,
	updateMedicinePharmacySchema,
} = require('../../../validations/pharmacy-management/medicine-pharmacy');

router.post(
	'/create',
	authentication,
	validation(createMedicinePharmacySchema),
	medicinePharmacyController.createMedicinePharmacy
);

router.get(
	'/get-all',
	authentication,
	medicinePharmacyController.getAllMedicinePharmacy
);

router.get(
	'/get/:medicineUnitId',
	authentication,
	medicinePharmacyController.getSingleMedicinePharmacy
);

router.patch(
	'/:medicineUnitId',
	authentication,
	validation(updateMedicinePharmacySchema),
	medicinePharmacyController.updateMedicinePharmacy
);

router.delete(
	'/:medicineUnitId',
	authentication,
	medicinePharmacyController.deleteMedicinePharmacy
);

module.exports = router;
