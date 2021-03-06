const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveUserAccessRole = async ({ userId, roleIds, actionPerformedBy }) => {
  const roleUsers = roleIds.map((roleId) => {
    return {
      userId,
      roleId,
      createdBy: actionPerformedBy,
      updatedBy: actionPerformedBy,
    };
  });

  try {
    const newUserAccessRole = await db.UserAccessRoles.bulkCreate([
      ...roleUsers,
    ]);
    return newUserAccessRole;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "UserAccessRole already exists",
      });
    }
    throw err;
  }
};

exports.listAllAssignedUsersForRole = ({ userId }) => {
  return db.UserAccessRoles.findAll({
    where: { userId },
    attributes: ["uarId"],
    include: [
      {
        model: db.User,
        attributes: ["userId", "displayName", "email"],
      },
      {
        model: db.Role,
        attributes: ["roleId", "description"],
      },
    ],
  });
};

exports.listAllUserAccessRoles = () => {
  return db.UserAccessRoles.findAll({
    attributes: ["uarId"],
    include: [
      {
        model: db.User,
        attributes: ["userId", "displayName", "email"],
      },
      {
        model: db.Role,
        attributes: ["roleId", "description"],
      },
    ],
  });
};
