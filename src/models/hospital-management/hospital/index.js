exports.init = (sequelize, DataTypes) => {
  const Hospital = sequelize.define(
    "Hospital",
    {
      hospitalId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      hospitalName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      openingHours: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      maxDoctors: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      maxPatients: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      maxDepartments: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(55),
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
    { underscored: true, tableName: "hospital" }
  );
  return Hospital;
};
