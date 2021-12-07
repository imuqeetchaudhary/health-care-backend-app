const roleService = require("../../../services/user-management/role");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

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
