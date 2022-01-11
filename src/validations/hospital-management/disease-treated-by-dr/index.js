const yup = require("yup");

exports.createDiseaseTreatedByDrSchema = yup.object().shape({
  diseaseId: yup.number().required(),
  doctorId: yup.number().required(),
});

exports.updateDiseaseTreatedByDrSchema = yup.object().shape({
  diseaseId: yup.number(),
  doctorId: yup.number(),
});
