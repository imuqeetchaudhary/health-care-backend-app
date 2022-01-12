const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const patientHistoryController = require("../../../controllers/hospital-management/patient-history");
const {
  createPatientHistorySchema,
  updatePatientHistorySchema,
} = require("../../../validations/hospital-management/patient-history");

router.post(
  "/create",
  authentication,
  validation(createPatientHistorySchema),
  patientHistoryController.createPatientHistory
);

router.get(
  "/get-all",
  authentication,
  patientHistoryController.getAllPatientHistory
);

router.get(
  "/get/:id",
  authentication,
  patientHistoryController.getSinglePatientHistory
);

router.patch(
  "/update/:id",
  authentication,
  validation(updatePatientHistorySchema),
  patientHistoryController.updatePatientHistory
);

router.delete(
  "/delete/:id",
  authentication,
  patientHistoryController.deletePatientHistory
);

module.exports = router;
