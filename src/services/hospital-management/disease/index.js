const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveDisease = async ({
  diseaseName,
  diseaseDescription,
  diseaseSymptoms,
  diseaseCauses,
  diseaseType,
  riskFactor,
  actionPerformedBy,
}) => {
  const disease = {
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newDisease = await db.Disease.create({
      ...disease,
    });
    return newDisease;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "Disease already exists",
      });
    }
    throw err;
  }
};

exports.listAllDisease = () => {
  return db.Disease.findAll({
    attributes: [
      "diseaseId",
      "diseaseName",
      "diseaseDescription",
      "diseaseSymptoms",
      "diseaseCauses",
      "diseaseType",
      "riskFactor",
    ],
  });
};

exports.findById = ({ id }) => {
  return db.Disease.findByPk(id, {
    attributes: [
      "diseaseId",
      "diseaseName",
      "diseaseDescription",
      "diseaseSymptoms",
      "diseaseCauses",
      "diseaseType",
      "riskFactor",
    ],
  });
};

exports.updateDisease = async ({
  diseaseId,
  diseaseName,
  diseaseDescription,
  diseaseSymptoms,
  diseaseCauses,
  diseaseType,
  riskFactor,
  actionPerformBy,
}) => {
  const disease = {
    diseaseName,
    diseaseDescription,
    diseaseSymptoms,
    diseaseCauses,
    diseaseType,
    riskFactor,
    updatedBy: actionPerformBy,
  };

  try {
    const updatedDisease = await db.Disease.update(
      { ...disease },
      { where: { diseaseId } }
    );

    if (dbUtils.isRecordFound(updatedDisease))
      throw new Exceptions.NotFound({
        message: "Disease not found",
      });
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err))
      throw new Exceptions.BadRequest({
        message: "Disease already exists",
      });
    throw err;
  }
};

exports.deleteDisease = async ({ diseaseId }) => {
  try {
    const deleteDisease = await db.Disease.destroy({
      where: { diseaseId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Disease unless delete all its reference",
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
