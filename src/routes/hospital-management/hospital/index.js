const express = require("express");
const router = express.Router();
const hospitalController = require("../../../controllers/hospital-management/hospital");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createHospitalSchema,
  updateHospitalSchema,
} = require("../../../validations/hospital-management/hospital");

router.post(
  "/create",
  authentication,
  validation(createHospitalSchema),
  hospitalController.createHospital
);

router.get("/get-all", authentication, hospitalController.getAllHospital);

router.get("/get/:id", authentication, hospitalController.getSingleHospital);

router.patch(
  "/update/:id",
  authentication,
  validation(updateHospitalSchema),
  hospitalController.updateHospital
);

router.delete("/delete/:id", authentication, hospitalController.deleteHospital);

module.exports = router;
