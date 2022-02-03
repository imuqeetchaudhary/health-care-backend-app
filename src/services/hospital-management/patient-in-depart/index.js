const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.savePatientInDepart = async ({
  departmentId,
  patientId,
  actionPerformedBy,
}) => {
  const patientInDepart = {
    departmentId,
    patientId,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newPatientInDepart = await db.PatientInDepart.create({
      ...patientInDepart,
    });
    return newPatientInDepart;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BaPatientequest({
        message: "patient in department already exists",
      });
    }
    throw err;
  }
};

exports.listAllPatientInDepart = () => {
  return db.PatientInDepart.findAll({
    attributes: ["patientInDepartId"],
    include: [
      {
        model: db.Department,
        attributes: ["departmentId", "departmentName"],
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
              "city",
              "country",
              "postalCode",
              "area",
              "phoneNumber",
              "dob",
            ],
          },
        ],
      },
    ],
  });
};

exports.findById = ({ id }) => {
  return db.PatientInDepart.findByPk(
    { where: { patientId: id } },
    {
      attributes: ["patientInDepartId"],
      include: [
        {
          model: db.Department,
          attributes: ["departmentId", "departmentName"],
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
      ],
    }
  );
};

exports.findByPid = ({ id }) => {
  return db.PatientInDepart.findOne({
    where: {
      patientId: id,
    },
    attributes: ["patientInDepartId"],
    include: [
      {
        model: db.Department,
        attributes: ["departmentId", "departmentName"],
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
    ],
  });
};

exports.updatePatientInDepart = async ({
  patientInDepartId,
  departmentId,
  patientId,
  actionPerformBy,
}) => {
  const patientInDepart = {
    departmentId,
    patientId,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedPatientInDepart = await db.PatientInDepart.update(
      { ...patientInDepart },
      { where: { patientId: patientInDepartId } }
    );

    if (dbUtils.isRecordFound(updatedPatientInDepart))
      throw new Exceptions.NotFound({
        message: "patient in department not found",
      });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BaPatientequest({
        message: "patient in department already exists",
      });
    throw err;
  }
};

exports.deletePatientInDepart = async ({ patientInDepartId }) => {
  try {
    const deletePatientInDepart = await db.PatientInDepart.destroy({
      where: { patientInDepartId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BaPatientequest({
        message:
          "Can't delete patient in department unless delete all its reference",
      });
    }
    throw err;
  }
};
