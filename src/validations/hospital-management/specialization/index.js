const yup = require("yup");

exports.createSpecializationSchema = yup.object().shape({
  details: yup.string().required(),
  doctorId: yup.number().required(),
});

exports.updateSpecializationSchema = yup.object().shape({
  details: yup.string(),
  doctorId: yup.number(),
});
