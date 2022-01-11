const express = require("express");
const router = express.Router();
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const diseaseController = require("../../../controllers/hospital-management/disease");
const {
  createDiseaseSchema,
  updateDiseaseSchema,
} = require("../../../validations/hospital-management/disease");

router.post(
  "/create",
  authentication,
  validation(createDiseaseSchema),
  diseaseController.createDisease
);

router.get("/get-all", authentication, diseaseController.getAllDisease);

router.get("/get/:id", authentication, diseaseController.getSingleDisease);

router.patch(
  "/update/:id",
  authentication,
  validation(updateDiseaseSchema),
  diseaseController.updateDisease
);

router.delete("/delete/:id", authentication, diseaseController.deleteDisease);

module.exports = router;
