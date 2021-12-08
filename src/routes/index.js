const express = require("express");
const router = express.Router();

const user = require("../routes/user-management/user");
const role = require("../routes/user-management/role");
const menu = require("../routes/user-management/menu");
const menuAccessRoles = require("../routes/user-management/menu-access-roles");

router.get("/", (req, res) =>
  res.send({ message: "Health Care Backend App RestApi" })
);

router.use("/user", user);
router.use("/role", role);
router.use("/menu", menu);
router.use("/menu-access-roles", menuAccessRoles);

module.exports = router;
