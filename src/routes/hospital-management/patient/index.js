const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const patientController = require("../../../controllers/hospital-management/patient");
const {
  createPatientSchema,
  updatePatientSchema,
} = require("../../../validations/hospital-management/patient");

router.post(
  "/create",
  authentication,
  validation(createPatientSchema),
  patientController.createPatient
);

router.get("/get-all", authentication, patientController.getAllPatient);

router.get("/get/:id", authentication, patientController.getSinglePatient);

router.patch(
  "/update/:id",
  authentication,
  validation(updatePatientSchema),
  patientController.updatePatient
);

router.delete("/delete/:id", authentication, patientController.deletePatient);

module.exports = router;
