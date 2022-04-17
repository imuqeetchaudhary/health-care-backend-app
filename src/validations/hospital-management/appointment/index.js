const yup = require('yup');

exports.createAppointmentSchema = yup.object().shape({
	appointmentReason: yup.string().required(),
	patientId: yup.number().required(),
	doctorId: yup.number().required(),
	status: yup.string().required(),
});

exports.updateAppointmentSchema = yup.object().shape({
	appointmentDateTime: yup.date().required(),
	status: yup.string(),
});
