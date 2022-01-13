const yup = require("yup");

exports.createAppointmentSchema = yup.object().shape({
  appointmentDateTime: yup.date().required(),
  appointmentReason: yup.string().required(),
  fee: yup.number().required(),
  patientId: yup.number().required(),
  diseaseId: yup.number().required(),
  doctorId: yup.number().required(),
});

exports.updateAppointmentSchema = yup.object().shape({
  appointmentDateTime: yup.date(),
  appointmentReason: yup.string(),
  fee: yup.number(),
  patientId: yup.number(),
  diseaseId: yup.number(),
  doctorId: yup.number(),
});
