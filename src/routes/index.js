const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.send({ message: "Health Care Backend App RestApi" })
);

module.exports = router;
