exports.init = (sequelize, DataTypes, { Department, Patient }) => {
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

  Department.hasMany(PatientInDepart, { foreignKey: "department_id" });
  PatientInDepart.belongsTo(Department, { foreignKey: "department_id" });

  Patient.hasMany(PatientInDepart, { foreignKey: "patient_id" });
  PatientInDepart.belongsTo(Patient, { foreignKey: "patient_id" });

  return PatientInDepart;
};
