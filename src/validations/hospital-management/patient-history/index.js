const yup = require("yup");

exports.createPatientHistorySchema = yup.object().shape({
  duarationUnit: yup.string().required(),
  duarationCount: yup.string().required(),
  patientId: yup.number().required(),
  diseaseId: yup.number().required(),
});

exports.updatePatientHistorySchema = yup.object().shape({
  duarationUnit: yup.string(),
  duarationCount: yup.string(),
  patientId: yup.number(),
  diseaseId: yup.number(),
});
