const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const specializationController = require("../../../controllers/hospital-management/specialization");
const {
  createSpecializationSchema,
  updateSpecializationSchema,
} = require("../../../validations/hospital-management/specialization");

router.post(
  "/create",
  authentication,
  validation(createSpecializationSchema),
  specializationController.createSpecialization
);

router.get(
  "/get-all",
  authentication,
  specializationController.getAllSpecialization
);

router.get(
  "/get/:id",
  authentication,
  specializationController.getSingleSpecialization
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateSpecializationSchema),
  specializationController.updateSpecialization
);

router.delete(
  "/delete/:id",
  authentication,
  specializationController.deleteSpecialization
);

module.exports = router;
