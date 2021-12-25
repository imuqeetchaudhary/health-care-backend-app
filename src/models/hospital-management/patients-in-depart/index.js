exports.init = (sequelize, DataTypes) => {
  const PatientsInDepart = sequelize.define(
    "PatientsInDepart",
    {
      patientsInDepartId: {
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
    { underscored: true, tableName: "patients_in_depart" }
  );

  return PatientsInDepart;
};
