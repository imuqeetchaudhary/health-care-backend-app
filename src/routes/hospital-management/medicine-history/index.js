const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const medicineHistoryController = require("../../../controllers/hospital-management/medicine-history");
const {
  createMedicineHistorySchema,
  updateMedicineHistorySchema,
} = require("../../../validations/hospital-management/medicine-history");

router.post(
  "/create",
  authentication,
  validation(createMedicineHistorySchema),
  medicineHistoryController.createMedicineHistory
);

router.get(
  "/get-all",
  authentication,
  medicineHistoryController.getAllMedicineHistory
);

router.get(
  "/get/:id",
  authentication,
  medicineHistoryController.getSingleMedicineHistory
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateMedicineHistorySchema),
  medicineHistoryController.updateMedicineHistory
);

router.delete(
  "/delete/:id",
  authentication,
  medicineHistoryController.deleteMedicineHistory
);

module.exports = router;
