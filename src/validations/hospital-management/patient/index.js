const yup = require("yup");

exports.createPatientSchema = yup.object().shape({
  status: yup.string().required(),
  userId: yup.number().required(),
});

exports.updatePatientSchema = yup.object().shape({
  status: yup.string(),
  userId: yup.number(),
});
