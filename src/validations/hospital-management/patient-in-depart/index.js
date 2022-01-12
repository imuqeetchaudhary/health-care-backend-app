const yup = require("yup");

exports.createPatientInDepartSchema = yup.object().shape({
  departmentId: yup.number().required(),
  patientId: yup.number().required(),
});

exports.updatePatientInDepartSchema = yup.object().shape({
  departmentId: yup.number(),
  patientId: yup.number(),
});
