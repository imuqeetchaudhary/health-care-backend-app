const patientService = require("../../../services/hospital-management/patient");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createPatient = promise(async (req, res) => {
  const { status, userId } = req.body;
  const actionPerformedBy = req.user.userId;

  const patient = await patientService.savePatient({
    status,
    userId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new patient",
    patient,
  });
});

exports.getAllPatient = promise(async (req, res) => {
  const patient = await patientService.listAllPatient();
  res.status(200).json({ patient });
});

exports.getSinglePatient = promise(async (req, res) => {
  const { id } = req.params;

  const patient = await patientService.findById({ id });
  res.status(200).json({ patient });
});

exports.updatePatient = promise(async (req, res) => {
  const { id } = req.params;
  const { status, userId } = req.body;
  const patientId = id;
  const actionPerformBy = req.user.userId;

  const updatepatient = await patientService.updatePatient({
    patientId,
    status,
    userId,
    actionPerformBy,
  });
  res.status(200).json({ message: "Successfully updated patient" });
});

exports.deletePatient = promise(async (req, res) => {
  const { id } = req.params;
  const patientId = id;

  const deletepatient = await patientService.deletePatient({
    patientId,
  });
  res.status(200).json({ message: "Successfully deleted patient" });
});
