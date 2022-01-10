const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const doctorController = require("../../../controllers/hospital-management/doctor");
const {
  createDoctorSchema,
  updateDoctorSchema,
} = require("../../../validations/hospital-management/doctor");

router.post(
  "/create",
  authentication,
  validation(createDoctorSchema),
  doctorController.createDoctor
);

router.get("/get-all", authentication, doctorController.getAllDoctor);

router.get("/get/:id", authentication, doctorController.getSingleDoctor);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDoctorSchema),
  doctorController.updateDoctor
);

router.delete("/delete/:id", authentication, doctorController.deleteDoctor);

module.exports = router;
