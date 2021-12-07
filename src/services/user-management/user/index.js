const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveUser = async ({ email, password, displayName, createdBy }) => {
  const user = {
    username: email,
    email,
    password,
    displayName,
  };

  try {
    const newUser = await db.User.create({ ...user });
    return newUser;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "User already exists" });
    }
    throw err;
  }
};

exports.findByEmail = ({ email }) => {
  return db.User.findOne({
    where: { email },
    ..._prop.hideFieldsCondition(),
  });
};

exports.listAllUsers = () => {
  return db.User.findAll({
    where: { isSuperuser: false },
    ..._prop.hideFieldsCondition(),
  });
};

exports.findById = ({ id }) => {
  return db.User.findByPk(id, _prop.hideFieldsCondition("password"));
};

const _prop = {
  HIDDEN_FIELDS: ["createdAt", "updatedAt", "authType", "email"],
  hideFieldsCondition: function (...args) {
    return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
  },
};
