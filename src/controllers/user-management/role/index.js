const roleService = require("../../../services/user-management/role");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createRole = promise(async (req, res) => {
  const { description } = req.body;
  const actionPerformedBy = req.user.userId;

  const role = await roleService.saveRole({
    description,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new role",
    role,
  });
});

exports.getAllRoles = promise(async (req, res) => {
  const role = await roleService.listAllRoles();
  res.status(200).json({ role });
});

exports.getSingleRole = promise(async (req, res) => {
  const { id } = req.params;

  const role = await roleService.findById({ id });
  res.status(200).json({ role });
});

exports.deleteRole = promise(async (req, res) => {
  const { id } = req.params;
  const roleId = id;

  const deleteRole = await roleService.deleteRole({
    roleId,
  });
  res.status(200).json({ message: "Successfully deleted role" });
});
