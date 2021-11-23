const Exceptions = require("../utils/custom-exceptions");

module.exports = async function (err, _, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let errors = [];

  console.log("ex handling", err);

  if (err instanceof Exceptions.HttpError) {
    if (err instanceof Exceptions.ValidationError) {
      errors = err.err;
    }
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).send({ message, errors });
  next();
};
