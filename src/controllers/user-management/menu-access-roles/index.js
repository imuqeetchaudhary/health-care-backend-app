const menuAccessRoleService = require("../../../services/user-management/menu-access-roles");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createMenuAccessRole = promise(async (req, res) => {
  const { roleId, menuIds } = req.body;
  const actionPerformedBy = req.user.userId;

  const menuAccessRole = await menuAccessRoleService.saveMenuAccessRole({
    roleId,
    menuIds,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new menu-access-role",
    menuAccessRole,
  });
});

exports.getAllMenusForSingleRole = promise(async (req, res) => {
  const { id } = req.params;
  const roleId = id;

  const menuAccessRole = await menuAccessRoleService.listAllAssignedMenusForRole({
    roleId,
  });
  res.status(200).json({ menuAccessRole });
});

exports.getAllAllMenuAccessRoles = promise(async (req, res) => {
  const menuAccessRole = await menuAccessRoleService.listAllMenuAccessRoles();
  res.status(200).json({ menuAccessRole });
});
