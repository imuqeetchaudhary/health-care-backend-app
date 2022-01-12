const patientHistoryService = require("../../../services/hospital-management/patient-history");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createPatientHistory = promise(async (req, res) => {
  const { duarationUnit, duarationCount, diseaseId, patientId } = req.body;
  const actionPerformedBy = req.user.userId;

  const patientHistory = await patientHistoryService.savePatientHistory({
    duarationUnit,
    duarationCount,
    diseaseId,
    patientId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new patient history",
    patientHistory,
  });
});

exports.getAllPatientHistory = promise(async (req, res) => {
  const patientHistory = await patientHistoryService.listAllPatientHistory();
  res.status(200).json({ patientHistory });
});

exports.getSinglePatientHistory = promise(async (req, res) => {
  const { id } = req.params;

  const patientHistory = await patientHistoryService.findById({ id });
  res.status(200).json({ patientHistory });
});

exports.updatePatientHistory = promise(async (req, res) => {
  const { id } = req.params;
  const { duarationUnit, duarationCount, diseaseId, patientId } = req.body;
  const pHistoryId = id;
  const actionPerformBy = req.user.userId;

  const updatePatientHistory = await patientHistoryService.updatePatientHistory(
    {
      pHistoryId,
      duarationUnit,
      duarationCount,
      diseaseId,
      patientId,
      actionPerformBy,
    }
  );
  res.status(200).json({ message: "Successfully updated patient history" });
});

exports.deletePatientHistory = promise(async (req, res) => {
  const { id } = req.params;
  const pHistoryId = id;

  const deletePatientHistory = await patientHistoryService.deletePatientHistory(
    {
      pHistoryId,
    }
  );
  res.status(200).json({ message: "Successfully deleted patient history" });
});
