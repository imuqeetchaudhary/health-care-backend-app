const yup = require("yup");

exports.registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  displayName: yup.string().required(),
  isAdmin: yup.boolean().required(),
  isSuperuser: yup.boolean().required(),
});

exports.loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
