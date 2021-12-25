exports.init = (sequelize, DataTypes) => {
  const Disease = sequelize.define(
    "Disease",
    {
      diseaseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      diseaseName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      diseaseDescription: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      diseaseSymptoms: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      diseaseCauses: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      diseaseType: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      riskFactor: {
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
    { underscored: true, tableName: "disease" }
  );

  return Disease;
};
