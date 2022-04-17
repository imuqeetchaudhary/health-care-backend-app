exports.init = (sequelize, DataTypes, { Patient, Doctor }) => {
	const Appointment = sequelize.define(
		'Appointment',
		{
			appointmentId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			appointmentDateTime: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			appointmentReason: {
				type: DataTypes.STRING(1000),
				allowNull: false,
			},
			fee: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			patientId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			doctorId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			createdBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			updatedBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
		},
		{ underscored: true, tableName: 'appointment' }
	);

	Patient.hasMany(Appointment, { foreignKey: 'patient_id' });
	Appointment.belongsTo(Patient, { foreignKey: 'patient_id' });

	Doctor.hasMany(Appointment, { foreignKey: 'doctor_id' });
	Appointment.belongsTo(Doctor, { foreignKey: 'doctor_id' });

	return Appointment;
};
