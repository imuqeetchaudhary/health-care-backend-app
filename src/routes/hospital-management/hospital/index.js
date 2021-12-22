const express = require("express");
const router = express.Router();
const hospitalController = require("../../../controllers/hospital-management/hospital");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const {
  createHospitalSchema,
} = require("../../../validations/hospital-management/hospital");

router.post(
  "/create",
  authentication,
  validation(createHospitalSchema),
  hospitalController.createHospital
);

router.get("/get-all", authentication, hospitalController.getAllHospitals);

router.get("/get/:id", authentication, hospitalController.getSingleHospital);

router.delete("/delete/:id", authentication, hospitalController.deleteHospital);

module.exports = router;
