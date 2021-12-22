exports.init = (sequelize, DataTypes, { User, Role }) => {
  const UserAccessRoles = sequelize.define(
    "UserAccessRoles",
    {
      uarId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      roleId: {
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
    { underscored: true, tableName: "ad_user_access_roles" }
  );

  User.hasMany(UserAccessRoles, { foreignKey: "user_id" });
  UserAccessRoles.belongsTo(User, { foreignKey: "user_id" });

  Role.hasMany(UserAccessRoles, { foreignKey: "role_id" });
  UserAccessRoles.belongsTo(Role, { foreignKey: "role_id" });

  return UserAccessRoles;
};
