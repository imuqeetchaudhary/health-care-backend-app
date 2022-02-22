exports.init = (sequelize, DataTypes, { Doctor }) => {
  const Qualification = sequelize.define(
    "Qualification",
    {
      qualificationId: {
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
    { underscored: true, tableName: "qualification" }
  );

  Doctor.hasMany(Qualification, { foreignKey: "doctor_id" });
  Qualification.belongsTo(Doctor, { foreignKey: "doctor_id" });

  return Qualification;
};
