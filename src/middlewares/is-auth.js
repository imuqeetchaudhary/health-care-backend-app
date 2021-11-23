const jwt = require("jsonwebtoken");
const config = require("config");
const Exceptions = require("../utils/custom-exceptions");

exports.authentication = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"] || req.headers["authorization"];

    if (token === null)
      throw new Exceptions.AccessDenies({
        message: "Auth Failed! Invalid Token",
      });

    jwt.verify(token, config.get("jwt.secret"), (err, user) => {
      if (err)
        throw new Exceptions.AccessDenies({
          message: "Auth Failed! Invalid Token",
        });
      else {
        req.user = user;
        next();
      }
    });
  } catch (err) {
    res.status(401).json({ message: "Auth Failed! Invalid Token" });
  }
};
