exports.init = (sequelize, DataTypes) => {
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

  return DiseaseTreatedByDr;
};
