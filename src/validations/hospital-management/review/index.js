const yup = require("yup");

exports.createReviewSchema = yup.object().shape({
  stars: yup.number().min(1).max(5).required(),
  patientId: yup.number().required(),
  doctorId: yup.number().required(),
});

exports.updateReviewSchema = yup.object().shape({
  stars: yup.number().min(1).max(5).required(),
  patientId: yup.number(),
  doctorId: yup.number(),
});
