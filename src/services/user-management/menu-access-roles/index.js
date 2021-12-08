const db = require("../../../models");
const dbUtils = require("../../error-check.util");
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

// exports.listAllMenuAccessRoles = () => {
//   return db.MenuAccessRoles.findAll({
//     attributes: ["MenuAccessRoleId", "description"],
//   });
// };

// exports.findById = ({ id }) => {
//   return db.MenuAccessRoles.findByPk(id, _prop.hideFieldsCondition());
// };

// exports.deleteMenuAccessRole = async ({ MenuAccessRoleId }) => {
//   try {
//     const deleteMenuAccessRole = await db.MenuAccessRoles.destroy({
//       where: { MenuAccessRoleId },
//     });
//   } catch (err) {
//     if (dbUtils.isFkFailed(err)) {
//       throw new Exceptions.BadRequest({
//         message: "Can't delete MenuAccessRole unless delete all its reference",
//       });
//     }
//     throw err;
//   }
// };

// const _prop = {
//   HIDDEN_FIELDS: ["createdAt", "updatedAt"],
//   hideFieldsCondition: function (...args) {
//     return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
//   },
// };
