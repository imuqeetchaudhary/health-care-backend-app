const diseaseService = require("../../../services/hospital-management/disease");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createDisease = promise(async (req, res) => {
  const {
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
  } = req.body;
  const actionPerformedBy = req.user.userId;

  const disease = await diseaseService.saveDisease({
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new disease",
    disease,
  });
});

exports.getAllDisease = promise(async (req, res) => {
  const disease = await diseaseService.listAllDisease();
  res.status(200).json({ disease });
});

exports.getSingleDisease = promise(async (req, res) => {
  const { id } = req.params;

  const disease = await diseaseService.findById({ id });
  res.status(200).json({ disease });
});

exports.updateDisease = promise(async (req, res) => {
  const { id } = req.params;
  const {
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
  } = req.body;
  const diseaseId = id;
  const actionPerformBy = req.user.userId;

  const updatedisease = await diseaseService.updateDisease({
    diseaseId,
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
    actionPerformBy,
  });
  res.status(200).json({ message: "Successfully updated disease" });
});

exports.deleteDisease = promise(async (req, res) => {
  const { id } = req.params;
  const diseaseId = id;

  const deleteDisease = await diseaseService.deleteDisease({
    diseaseId,
  });
  res.status(200).json({ message: "Successfully deleted disease" });
});
