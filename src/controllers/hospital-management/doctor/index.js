const doctorService = require("../../../services/hospital-management/doctor");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createDoctor = promise(async (req, res) => {
  const { fee, experience, isAvailable, availablityDays, activeHours, userId } =
    req.body;
  const actionPerformedBy = req.user.userId;

  const doctor = await doctorService.saveDoctor({
    fee,
    experience,
    isAvailable,
    availablityDays,
    activeHours,
    userId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new doctor",
    doctor,
  });
});

exports.getAllDoctor = promise(async (req, res) => {
  const doctor = await doctorService.listAllDoctor();
  res.status(200).json({ doctor });
});

exports.getSingleDoctor = promise(async (req, res) => {
  const { id } = req.params;

  const doctor = await doctorService.findById({ id });
  res.status(200).json({ doctor });
});

exports.updateDoctor = promise(async (req, res) => {
  const { id } = req.params;
  const { fee, experience, isAvailable, availablityDays, activeHours, userId } =
    req.body;
  const doctorId = id;
  const actionPerformBy = req.user.userId;

  const updatedoctor = await doctorService.updateDoctor({
    doctorId,
    fee,
    experience,
    isAvailable,
    availablityDays,
    activeHours,
    userId,
    actionPerformBy,
  });
  console.log(updatedoctor);
  res.status(200).json({ message: "Successfully updated doctor" });
});

exports.deleteDoctor = promise(async (req, res) => {
  const { id } = req.params;
  const doctorId = id;

  const deletedoctor = await doctorService.deleteDoctor({
    doctorId,
  });
  res.status(200).json({ message: "Successfully deleted doctor" });
});
