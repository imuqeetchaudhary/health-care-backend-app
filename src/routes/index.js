const express = require("express");
const router = express.Router();

const user = require("../routes/user-management/user");

router.get("/", (req, res) =>
  res.send({ message: "Health Care Backend App RestApi" })
);

router.use("/user", user);

module.exports = router;
