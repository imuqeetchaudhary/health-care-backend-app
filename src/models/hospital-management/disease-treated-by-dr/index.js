exports.init = (sequelize, DataTypes, { Doctor, Disease }) => {
  const DiseaseTreatedByDr = sequelize.define(
    "DiseaseTreatedByDr",
    {
      dtbdId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      diseaseId: {
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
    { underscored: true, tableName: "disease_treated_by_dr" }
  );

  Disease.hasMany(DiseaseTreatedByDr, { foreignKey: "disease_id" });
  DiseaseTreatedByDr.belongsTo(Disease, { foreignKey: "disease_id" });

  Doctor.hasMany(DiseaseTreatedByDr, { foreignKey: "doctor_id" });
  DiseaseTreatedByDr.belongsTo(Doctor, { foreignKey: "doctor_id" });

  return DiseaseTreatedByDr;
};
