const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const qualificationController = require("../../../controllers/hospital-management/qualification");
const {
  createQualificationSchema,
  updateQualificationSchema,
} = require("../../../validations/hospital-management/qualification");

router.post(
  "/create",
  authentication,
  validation(createQualificationSchema),
  qualificationController.createQualification
);

router.get(
  "/get-all",
  authentication,
  qualificationController.getAllQualification
);

router.get(
  "/get/:id",
  authentication,
  qualificationController.getSingleQualification
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateQualificationSchema),
  qualificationController.updateQualification
);

router.delete(
  "/delete/:id",
  authentication,
  qualificationController.deleteQualification
);

module.exports = router;
