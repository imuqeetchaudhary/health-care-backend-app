exports.init = (sequelize, DataTypes) => {
  const UserAccessRoles = sequelize.define(
    "UserAccessRoles",
    {
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
  return UserAccessRoles;
};
