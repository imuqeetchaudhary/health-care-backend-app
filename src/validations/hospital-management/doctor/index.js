const yup = require("yup");

exports.createDoctorSchema = yup.object().shape({
  fee: yup.number().required(),
  experience: yup.number().required(),
  isAvailable: yup.boolean().required(),
  availablityDays: yup.string().required(),
  activeHours: yup.string().required(),
  userId: yup.number().required(),
});

exports.updateDoctorSchema = yup.object().shape({
  fee: yup.number(),
  experience: yup.number(),
  isAvailable: yup.boolean(),
  availablityDays: yup.string(),
  activeHours: yup.string(),
  userId: yup.number(),
});
