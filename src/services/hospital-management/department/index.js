const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveDepartment = async ({
  departmentName,
  maxDoctors,
  maxPatients,
  phoneNo,
  email,
  status,
  hospitalId,
  actionPerformedBy,
}) => {
  const department = {
    departmentName,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
    actionPerformedBy,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newDepartment = await db.Department.create({ ...department });
    return newDepartment;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Department already exists",
      });
    }
    throw err;
  }
};

exports.listAllDepartment = () => {
  return db.Department.findAll({
    attributes: [
      "departmentId",
      "departmentName",
      "image",
      "maxDoctors",
      "maxPatients",
      "phoneNo",
      "email",
      "status",
    ],
    include: [
      {
        model: db.Hospital,
        attributes: [
          "hospitalId",
          "hospitalName",
          "openingHours",
          "image",
          "maxDoctors",
          "maxPatients",
          "maxDepartments",
          "city",
          "country",
          "area",
          "postalCode",
          "phoneNo",
          "email",
          "status",
        ],
      },
    ],
  });
};

exports.findById = ({ id }) => {
  return db.Department.findByPk(id, {
    attributes: [
      "departmentId",
      "departmentName",
      "image",
      "maxDoctors",
      "maxPatients",
      "phoneNo",
      "email",
      "status",
    ],
    include: [
      {
        model: db.Hospital,
        attributes: [
          "hospitalId",
          "hospitalName",
          "openingHours",
          "image",
          "maxDoctors",
          "maxPatients",
          "maxDepartments",
          "city",
          "country",
          "area",
          "postalCode",
          "phoneNo",
          "email",
          "status",
        ],
      },
    ],
  });
};

exports.updateDepartment = async ({
  departmentId,
  departmentName,
  maxDoctors,
  maxPatients,
  phoneNo,
  email,
  status,
  hospitalId,
  actionPerformBy,
}) => {
  const department = {
    departmentName,
    maxDoctors,
    maxPatients,
    phoneNo,
    email,
    status,
    hospitalId,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedDepartment = await db.Department.update(
      { ...department },
      { where: { departmentId } }
    );

    if (dbUtils.isRecordFound(updatedDepartment))
      throw new Exceptions.NotFound({ message: "Department not found" });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BadRequest({ message: "Department already exists" });
    throw err;
  }
};

exports.deleteDepartment = async ({ departmentId }) => {
  try {
    const deleteDepartment = await db.Department.destroy({
      where: { departmentId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Department unless delete all its reference",
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
