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

exports.login = promise(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findByEmail({ email });

  if (!user) {
    throw new Exceptions.BadRequest({
      message: "Your credentials not matched",
    });
  }

  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    throw new Exceptions.BadRequest({
      message: "Your credentials not matched",
    });
  }

  const token = jwt.sign(
    {
      userId: user.userId,
      username: user.username,
      displayName: user.displayName,
      isActive: user.isActive,
      isAdmin: user.isAdmin,
      isSuperuser: user.isSuperuser,
    },
    config.get("jwt.secret")
  );

  const userId = user.userId;

  res.status(200).json({
    token,
    userId,
    username: user.username,
    displayName: user.displayName,
    isActive: user.isActive,
    isAdmin: user.isAdmin,
    isSuperuser: user.isSuperuser,
  });
});