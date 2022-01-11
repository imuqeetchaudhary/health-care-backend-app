const qualificationService = require("../../../services/hospital-management/qualification");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createQualification = promise(async (req, res) => {
  const { details, doctorId } = req.body;
  const actionPerformedBy = req.user.userId;

  const qualification = await qualificationService.saveQualification({
    details,
    doctorId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new qualification",
    qualification,
  });
});

exports.getAllQualification = promise(async (req, res) => {
  const qualification = await qualificationService.listAllQualification();
  res.status(200).json({ qualification });
});

exports.getSingleQualification = promise(async (req, res) => {
  const { id } = req.params;

  const qualification = await qualificationService.findById({ id });
  res.status(200).json({ qualification });
});

exports.updateQualification = promise(async (req, res) => {
  const { id } = req.params;
  const { details, doctorId } = req.body;
  const qualificationId = id;
  const actionPerformBy = req.user.userId;

  const updateQualification = await qualificationService.updateQualification({
    qualificationId,
    details,
    doctorId,
    actionPerformBy,
  });
  res.status(200).json({ message: "Successfully updated qualification" });
});

exports.deleteQualification = promise(async (req, res) => {
  const { id } = req.params;
  const qualificationId = id;

  const deleteQualification = await qualificationService.deleteQualification({
    qualificationId,
  });
  res.status(200).json({ message: "Successfully deleted qualification" });
});
