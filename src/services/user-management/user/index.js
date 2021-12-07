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
