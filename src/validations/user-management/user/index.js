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

exports.updateUserSchema = yup.object().shape({
  city: yup.string(),
  country: yup.string(),
  area: yup.string(),
  postalCode: yup.string(),
  phoneNumber: yup.number(),
  image: yup.string(),
  dob: yup.date(),
  gender: yup.string(),
});
