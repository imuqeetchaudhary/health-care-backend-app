const sequelize = require("sequelize");
const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const menuUtils = require("./util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveMenuAccessRole = async ({ roleId, menuIds, actionPerformedBy }) => {
  const roleMenus = menuIds.map((menuId) => {
    return {
      menuId,
      roleId,
      createdBy: actionPerformedBy,
      updatedBy: actionPerformedBy,
    };
  });

  try {
    const newMenuAccessRole = await db.MenuAccessRoles.bulkCreate([
      ...roleMenus,
    ]);
    return newMenuAccessRole;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({
        message: "MenuAccessRole already exists",
      });
    }
    throw err;
  }
};

exports.listAllMenusForRole = ({ roleId }) => {
  return db.sequelize.query(
    menuUtils.queryForGetAndCheckMenuExistsForRole(roleId),
    { type: sequelize.QueryTypes.SELECT }
  );
};

exports.listAllAssignedMenusForRole = ({ roleId }) => {
  return db.MenuAccessRoles.findAll({
    where: { roleId },
    attributes: ["marId"],
    include: [
      {
        model: db.Menu,
        attributes: ["menuId", "description", "link", "icon", "parentId"],
        include: [
          {
            model: db.MenuCategory,
            attributes: ["categoryId", "description"],
          },
        ],
      },
      {
        model: db.Role,
        attributes: ["roleId", "description"],
      },
    ],
  });
};

exports.listAllMenuAccessRoles = () => {
  return db.MenuAccessRoles.findAll({
    attributes: ["marId"],
    include: [
      {
        model: db.Menu,
        attributes: [
          "menuId",
          "description",
          "link",
          "icon",
          "parentId",
          "categoryId",
        ],
      },
      {
        model: db.Role,
        attributes: ["roleId", "description"],
      },
    ],
  });
};
