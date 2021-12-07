const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveRole = async ({ description, actionPerformedBy }) => {
  const role = {
    description,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newrole = await db.Role.create({ ...role });
    return newrole;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "Role already exists" });
    }
    throw err;
  }
};

exports.listAllRoles = () => {
  return db.Role.findAll({
    attributes: ["roleId", "description"],
  });
};

exports.findById = ({ id }) => {
  return db.Role.findByPk(id, _prop.hideFieldsCondition());
};

exports.deleteRole = async ({ roleId }) => {
  try {
    const deleteRole = await db.Role.destroy({
      where: { roleId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Role unless delete all its reference",
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
