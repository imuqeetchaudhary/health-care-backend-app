exports.init = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      authType: {
        type: DataTypes.STRING(55),
        allowNull: false,
        defaultValue: "email",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSuperuser: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      dob: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    { underscored: true, tableName: "user" }
  );
  return User;
};
