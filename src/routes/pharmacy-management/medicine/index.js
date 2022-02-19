const express = require('express');
const router = express.Router();
const { validation } = require('../../../middlewares/validation');
const { authentication } = require('../../../middlewares/is-auth');
const medicineController = require('../../../controllers/pharmacy-management/medicine');
const {
	createMedicineSchema,
	updateMedicineSchema,
} = require('../../../validations/pharmacy-management/medicine');

router.post(
	'/create',
	authentication,
	validation(createMedicineSchema),
	medicineController.createMedicine
);

router.get('/get-all', authentication, medicineController.getAllMedicine);

router.get('/get/:id', authentication, medicineController.getSingleMedicine);

router.patch(
	'/update/:id',
	authentication,
	validation(updateMedicineSchema),
	medicineController.updateMedicine
);

router.delete('/delete/:id', authentication, medicineController.deleteMedicine);

module.exports = router;
