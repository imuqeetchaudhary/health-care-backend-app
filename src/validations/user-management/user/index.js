const yup = require("yup");

exports.registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  displayName: yup.string().required(),
});
