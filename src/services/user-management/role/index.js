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
