const yup = require("yup");

exports.createMedicineHistorySchema = yup.object().shape({
  medicineId: yup.number().required(),
  appointmentId: yup.number().required(),
});

exports.updateMedicineHistorySchema = yup.object().shape({
  medicineId: yup.number(),
  appointmentId: yup.number(),
});
