const userAccessRoleService = require("../../../services/user-management/user-access-roles");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createUserAccessRole = promise(async (req, res) => {
  const { userId, roleIds } = req.body;
  const actionPerformedBy = req.user.userId;

  const userAccessRole = await userAccessRoleService.saveUserAccessRole({
    userId,
    roleIds,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new user-access-role",
    userAccessRole,
  });
});
