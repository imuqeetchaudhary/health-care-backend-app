exports.init = (sequelize, DataTypes, { Patient, Disease }) => {
  const PatientPreviousDisease = sequelize.define(
    "PatientPreviousDisease",
    {
      pHistoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      duarationUnit: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      duarationCount: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      diseaseId: {
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
    { underscored: true, tableName: "patient_previous_disease" }
  );

  Patient.hasMany(PatientPreviousDisease, { foreignKey: "patient_id" });
  PatientPreviousDisease.belongsTo(Patient, { foreignKey: "patient_id" });

  Disease.hasMany(PatientPreviousDisease, { foreignKey: "disease_id" });
  PatientPreviousDisease.belongsTo(Disease, { foreignKey: "disease_id" });

  return PatientPreviousDisease;
};
