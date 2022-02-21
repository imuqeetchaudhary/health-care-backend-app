const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const medicineUnitController = require('../../../controllers/pharmacy-management/medicine-unit');
const {
	createMedicineUnitSchema,
	updateMedicineUnitSchema,
} = require('../../../validations/pharmacy-management/medicine-unit');

router.post(
	'/create',
	authentication,
	validation(createMedicineUnitSchema),
	medicineUnitController.createMedicineUnit
);

router.get('/get-all', authentication, medicineUnitController.getAllMedicineUnit);

router.get(
	'/get/:medicineId',
	authentication,
	medicineUnitController.getSingleMedicineUnit
);

router.patch(
	'/update/:medicineId',
	authentication,
	validation(updateMedicineUnitSchema),
	medicineUnitController.updateMedicineUnit
);

router.delete(
	'/delete/:medicineId',
	authentication,
	medicineUnitController.deleteMedicineUnit
);

module.exports = router;
