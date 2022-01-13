const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveMedicineHistory = async ({
  appointmentId,
  medicineId,
  actionPerformedBy,
}) => {
  const medicineHistory = {
    appointmentId,
    medicineId,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newMedicineHistory = await db.MedicineHistory.create({
      ...medicineHistory,
    });
    return newMedicineHistory;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BaMedicineequest({
        message: "Medicine history already exists",
      });
    }
    throw err;
  }
};

exports.listAllMedicineHistory = () => {
  return db.MedicineHistory.findAll({
    attributes: ["mHistoryId", "medicineId"],
    include: [
      {
        model: db.Appointment,
        attributes: [
          "appointmentId",
          "appointmentDateTime",
          "appointmentReason",
          "fee",
          "patientId",
          "doctorId",
          "diseaseId",
        ],
      }
    ],
  });
};

exports.findById = ({ id }) => {
  return db.MedicineHistory.findByPk(id, {
    attributes: ["mHistoryId", "medicineId"],
    include: [
      {
        model: db.Appointment,
        attributes: [
          "appointmentId",
          "appointmentDateTime",
          "appointmentReason",
          "fee",
          "patientId",
          "doctorId",
          "diseaseId",
        ],
      },
    ],
  });
};

exports.updateMedicineHistory = async ({
  mHistoryId,
  duarationUnit,
  duarationCount,
  appointmentId,
  medicineId,
  actionPerformBy,
}) => {
  const medicineHistory = {
    duarationUnit,
    duarationCount,
    appointmentId,
    medicineId,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedMedicineHistory = await db.MedicineHistory.update(
      { ...medicineHistory },
      { where: { mHistoryId } }
    );

    if (dbUtils.isRecordFound(updatedMedicineHistory))
      throw new Exceptions.NotFound({
        message: "Medicine history not found",
      });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BaMedicineequest({
        message: "Medicine history already exists",
      });
    throw err;
  }
};

exports.deleteMedicineHistory = async ({ mHistoryId }) => {
  try {
    const deleteMedicineHistory = await db.MedicineHistory.destroy({
      where: { mHistoryId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BaMedicineequest({
        message:
          "Can't delete Medicine history unless delete all its reference",
      });
    }
    throw err;
  }
};
