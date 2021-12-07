const userService = require("../../../services/user-management/user");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

exports.register = promise(async (req, res) => {
  const { email, password, displayName } = req.body;
  const createdBy = req.user.userId;

  const hashPassword = bcrypt.hashSync(password, 10);

  const user = await userService.saveUser({
    email,
    password: hashPassword,
    displayName,
    createdBy,
  });

  res.status(200).json({
    message: "Successfully created new user",
    user,
  });
});
