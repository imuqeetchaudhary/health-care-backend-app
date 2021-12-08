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

// exports.getAllMenuAccessRoles = promise(async (req, res) => {
//   const menuAccessRole = await menuAccessRoleService.listAllMenuAccessRoles();
//   res.status(200).json({ menuAccessRole });
// });

// exports.getSingleMenuAccessRole = promise(async (req, res) => {
//   const { id } = req.params;

//   const menuAccessRole = await menuAccessRoleService.findById({ id });
//   res.status(200).json({ menuAccessRole });
// });

// exports.deleteMenuAccessRole = promise(async (req, res) => {
//   const { id } = req.params;
//   const menuAccessRoleId = id;

//   const deletemenuAccessRole = await menuAccessRoleService.deleteMenuAccessRole(
//     {
//       menuAccessRoleId,
//     }
//   );
//   res.status(200).json({ message: "Successfully deleted menu-access-role" });
// });
