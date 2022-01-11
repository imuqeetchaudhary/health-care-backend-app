const yup = require("yup");

exports.createDiseaseSchema = yup.object().shape({
  diseaseName: yup.string().required(),
  diseaseDescription: yup.string().required(),
  diseaseSymptoms: yup.string().required(),
  diseaseCauses: yup.string().required(),
  diseaseType: yup.string().required(),
  riskFactor: yup.number().required(),
});

exports.updateDiseaseSchema = yup.object().shape({
  diseaseName: yup.string(),
  diseaseDescription: yup.string(),
  diseaseSymptoms: yup.string(),
  diseaseCauses: yup.string(),
  diseaseType: yup.string(),
  riskFactor: yup.number(),
});
