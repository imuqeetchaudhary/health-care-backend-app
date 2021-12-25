exports.init = (sequelize, DataTypes) => {
  const PatientInDepart = sequelize.define(
    "PatientInDepart",
    {
      patientInDepartId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      departmentId: {
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
    { underscored: true, tableName: "patient_in_depart" }
  );

  return PatientInDepart;
};
