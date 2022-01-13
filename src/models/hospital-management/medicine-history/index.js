exports.init = (sequelize, DataTypes, { Appointment }) => {
  const MedicineHistory = sequelize.define(
    "MedicineHistory",
    {
      mHistoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      medicineId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      appointmentId: {
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
    { underscored: true, tableName: "medicine_history" }
  );

  Appointment.hasMany(MedicineHistory, { foreignKey: "appointment_id" });
  MedicineHistory.belongsTo(Appointment, { foreignKey: "appointment_id" });

  return MedicineHistory;
};
