const express = require("express");
const router = express.Router();

const user = require("../routes/user-management/user");
const role = require("../routes/user-management/role");

router.get("/", (req, res) =>
  res.send({ message: "Health Care Backend App RestApi" })
);

router.use("/user", user);
router.use("/role", role);

module.exports = router;
