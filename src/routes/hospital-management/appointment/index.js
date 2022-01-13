const express = require("express");
const router = express.Router();
const { upload } = require("../../../middlewares/upload");
const { validation } = require("../../../middlewares/validation");
const { authentication } = require("../../../middlewares/is-auth");
const appointmentController = require("../../../controllers/hospital-management/appointment");
const {
  createAppointmentSchema,
  updateAppointmentSchema,
} = require("../../../validations/hospital-management/appointment");

router.post(
  "/create",
  authentication,
  validation(createAppointmentSchema),
  appointmentController.createAppointment
);

router.get("/get-all", authentication, appointmentController.getAllAppointment);

router.get(
  "/get/:id",
  authentication,
  appointmentController.getSingleAppointment
);

router.patch(
  "/update/:id",
  authentication,
  validation(updateAppointmentSchema),
  appointmentController.updateAppointment
);

router.delete(
  "/delete/:id",
  authentication,
  appointmentController.deleteAppointment
);

module.exports = router;
