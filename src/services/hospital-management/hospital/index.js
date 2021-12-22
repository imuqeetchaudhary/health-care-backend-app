const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveHospital = async ({
  hospitalName,
  openingHours,
  image,
  maxDoctors,
  maxPatients,
  maxDepartments,
  city,
  country,
  area,
  postalCode,
  phoneNo,
  email,
  status,
  actionPerformedBy,
}) => {
  const hospital = {
    hospitalName,
    openingHours,
    image,
    maxDoctors,
    maxPatients,
    maxDepartments,
    city,
    country,
    area,
    postalCode,
    phoneNo,
    email,
    status,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newHospital = await db.Hospital.create({ ...hospital });
    return newHospital;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "Hospital already exists" });
    }
    throw err;
  }
};

exports.listAllHospitals = () => {
  return db.Hospital.findAll({});
};

exports.findById = ({ id }) => {
  return db.Hospital.findByPk(id, _prop.hideFieldsCondition());
};

exports.deleteHospital = async ({ hospitalId }) => {
  try {
    const deleteHospital = await db.Hospital.destroy({
      where: { hospitalId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Hospital unless delete all its reference",
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
