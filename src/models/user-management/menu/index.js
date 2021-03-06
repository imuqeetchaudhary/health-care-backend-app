exports.init = (sequelize, DataTypes, { MenuCategory }) => {
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
      categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
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

  MenuCategory.hasMany(Menu, { foreignKey: "category_id" });
  Menu.belongsTo(MenuCategory, { foreignKey: "category_id" });

  return Menu;
};
