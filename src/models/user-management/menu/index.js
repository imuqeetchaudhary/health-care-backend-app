exports.init = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      menuId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      link: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(500),
      },
      parentId: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    { underscored: true, tableName: "ad_menu" }
  );
  return Menu;
};
