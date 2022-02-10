const appointmentService = require('../../../services/hospital-management/appointment');
const { promise } = require('../../../middlewares/promise');
const Exceptions = require('../../../utils/custom-exceptions');

exports.createAppointment = promise(async (req, res) => {
	const {
		appointmentDateTime,
		appointmentReason,
		fee,
		patientId,
		diseaseId,
		doctorId,
		duration,
		type,
		status,
	} = req.body;
	const actionPerformedBy = req.user.userId;

	const appointment = await appointmentService.saveAppointment({
		appointmentDateTime,
		appointmentReason,
		fee,
		patientId,
		diseaseId,
		doctorId,
		duration,
		type,
		status,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new Appointment',
		appointment,
	});
});

exports.getAllAppointment = promise(async (req, res) => {
	const appointment = await appointmentService.listAllAppointment();
	res.status(200).json({ appointment });
});

exports.getSingleAppointment = promise(async (req, res) => {
	const { id } = req.params;

	const appointment = await appointmentService.findById({ id });
	res.status(200).json({ appointment });
});

exports.updateAppointment = promise(async (req, res) => {
	const { id } = req.params;
	const {
		appointmentDateTime,
		appointmentReason,
		fee,
		patientId,
		diseaseId,
		doctorId,
		duration,
		type,
		status,
	} = req.body;
	const appointmentId = id;
	const actionPerformBy = req.user.userId;

	const updateAppointment = await appointmentService.updateAppointment({
		appointmentId,
		appointmentDateTime,
		appointmentReason,
		fee,
		patientId,
		diseaseId,
		doctorId,
		duration,
		type,
		status,
		actionPerformBy,
	});
	res.status(200).json({ message: 'Successfully updated Appointment' });
});

exports.deleteAppointment = promise(async (req, res) => {
	const { id } = req.params;
	const appointmentId = id;

	const deleteAppointment = await appointmentService.deleteAppointment({
		appointmentId,
	});
	res.status(200).json({ message: 'Successfully deleted Appointment' });
});
