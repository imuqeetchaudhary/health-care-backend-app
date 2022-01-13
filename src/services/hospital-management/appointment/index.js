const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveAppointment = async ({
  appointmentDateTime,
  appointmentReason,
  fee,
  patientId,
  diseaseId,
  doctorId,
  actionPerformedBy,
}) => {
  const Appointment = {
    appointmentDateTime,
    appointmentReason,
    fee,
    patientId,
    diseaseId,
    doctorId,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newAppointment = await db.Appointment.create({
      ...Appointment,
    });
    return newAppointment;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Appointment already exists",
      });
    }
    throw err;
  }
};

exports.listAllAppointment = () => {
  return db.Appointment.findAll({
    attributes: [
      "appointmentId",
      "appointmentDateTime",
      "appointmentReason",
      "fee",
    ],
    include: [
      {
        model: db.Disease,
        attributes: [
          "diseaseId",
          "diseaseName",
          "diseaseDescription",
          "diseaseSymptoms",
          "diseaseCauses",
          "diseaseType",
          "riskFactor",
        ],
      },
      {
        model: db.Patient,
        attributes: ["patientId", "status", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
      {
        model: db.Doctor,
        attributes: ["doctorId", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
    ],
  });
};

exports.findById = ({ id }) => {
  return db.Appointment.findByPk(id, {
    attributes: [
      "appointmentId",
      "appointmentDateTime",
      "appointmentReason",
      "fee",
    ],
    include: [
      {
        model: db.Disease,
        attributes: [
          "diseaseId",
          "diseaseName",
          "diseaseDescription",
          "diseaseSymptoms",
          "diseaseCauses",
          "diseaseType",
          "riskFactor",
        ],
      },
      {
        model: db.Patient,
        attributes: ["patientId", "status", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
      {
        model: db.Doctor,
        attributes: ["doctorId", "userId"],
        include: [
          {
            model: db.User,
            attributes: [
              "userId",
              "email",
              "displayName",
              "isActive",
              "isAdmin",
              "isSuperuser",
            ],
          },
        ],
      },
    ],
  });
};

exports.updateAppointment = async ({
  appointmentId,
  appointmentDateTime,
  appointmentReason,
  fee,
  patientId,
  diseaseId,
  doctorId,
  actionPerformBy,
}) => {
  const Appointment = {
    appointmentDateTime,
    appointmentReason,
    fee,
    patientId,
    diseaseId,
    doctorId,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedAppointment = await db.Appointment.update(
      { ...Appointment },
      { where: { appointmentId } }
    );

    if (dbUtils.isRecordFound(updatedAppointment))
      throw new Exceptions.NotFound({
        message: "Appointment not found",
      });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BadRequest({
        message: "Appointment already exists",
      });
    throw err;
  }
};

exports.deleteAppointment = async ({ appointmentId }) => {
  try {
    const deleteAppointment = await db.Appointment.destroy({
      where: { appointmentId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message:
          "Can't delete Appointment unless delete all its reference",
      });
    }
    throw err;
  }
};

const _prop = {
  HIDDEN_FIELDS: ["createdAt", "updatedAt"],
  hideFieldsCondition: function (...args) {
    return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
  },
};
