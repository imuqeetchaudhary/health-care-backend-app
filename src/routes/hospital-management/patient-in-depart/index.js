const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const patientInDepartController = require("../../../controllers/hospital-management/patient-in-depart");
const {
  createPatientInDepartSchema,
  updatePatientInDepartSchema,
} = require("../../../validations/hospital-management/patient-in-depart");

router.post(
  "/create",
  authentication,
  validation(createPatientInDepartSchema),
  patientInDepartController.createPatientInDepart
);

router.get(
  "/get-all",
  authentication,
  patientInDepartController.getAllPatientInDepart
);

router.get(
  "/get/:id",
  authentication,
  patientInDepartController.getSinglePatientInDepart
);

router.patch(
  "/update/:id",
  authentication,
  validation(updatePatientInDepartSchema),
  patientInDepartController.updatePatientInDepart
);

router.delete(
  "/delete/:id",
  authentication,
  patientInDepartController.deletePatientInDepart
);

module.exports = router;
