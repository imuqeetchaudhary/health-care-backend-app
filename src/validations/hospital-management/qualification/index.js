const yup = require("yup");

exports.createQualificationSchema = yup.object().shape({
  details: yup.string().required(),
  doctorId: yup.number().required(),
});

exports.updateQualificationSchema = yup.object().shape({
  details: yup.string(),
  doctorId: yup.number(),
});
