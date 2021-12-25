exports.init = (sequelize, DataTypes, { Doctor }) => {
  const Specialization = sequelize.define(
    "Specialization",
    {
      specializationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING(55),
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
    { underscored: true, tableName: "specialization" }
  );

  Doctor.hasMany(Specialization, { foreignKey: "doctor_id" });
  Specialization.belongsTo(Doctor, { foreignKey: "doctor_id" });

  return Specialization;
};
