const medicineHistoryService = require("../../../services/hospital-management/medicine-history");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createMedicineHistory = promise(async (req, res) => {
  const { medicineId, appointmentId } = req.body;
  const actionPerformedBy = req.user.userId;

  const medicineHistory = await medicineHistoryService.saveMedicineHistory({
    medicineId,
    appointmentId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new medicine history",
    medicineHistory,
  });
});

exports.getAllMedicineHistory = promise(async (req, res) => {
  const medicineHistory = await medicineHistoryService.listAllMedicineHistory();
  res.status(200).json({ medicineHistory });
});

exports.getSingleMedicineHistory = promise(async (req, res) => {
  const { id } = req.params;

  const medicineHistory = await medicineHistoryService.findById({ id });
  res.status(200).json({ medicineHistory });
});

exports.updateMedicineHistory = promise(async (req, res) => {
  const { id } = req.params;
  const { medicineId, appointmentId } = req.body;
  const mHistoryId = id;
  const actionPerformBy = req.user.userId;

  const updateMedicineHistory =
    await medicineHistoryService.updateMedicineHistory({
      mHistoryId,
      medicineId,
      appointmentId,
      actionPerformBy,
    });
  res.status(200).json({ message: "Successfully updated medicine history" });
});

exports.deleteMedicineHistory = promise(async (req, res) => {
  const { id } = req.params;
  const mHistoryId = id;

  const deleteMedicineHistory =
    await medicineHistoryService.deleteMedicineHistory({
      mHistoryId,
    });
  res.status(200).json({ message: "Successfully deleted medicine history" });
});
