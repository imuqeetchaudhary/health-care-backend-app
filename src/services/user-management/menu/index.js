const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveMenu = async ({
  description,
  link,
  icon,
  parentId,
  categoryId,
  actionPerformedBy,
}) => {
  const menu = {
    description,
    link,
    icon,
    parentId,
    categoryId,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newMenu = await db.Menu.create({ ...menu });
    return newMenu;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "Menu already exists" });
    }
    throw err;
  }
};

exports.listAllMenus = () => {
  return db.Menu.findAll({
    attributes: ["menuId", "description", "link", "icon", "parentId"],
  });
};

exports.findById = ({ id }) => {
  return db.Menu.findByPk(id, _prop.hideFieldsCondition());
};

exports.deleteMenu = async ({ menuId }) => {
  try {
    const deleteMenu = await db.Menu.destroy({
      where: { menuId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete menu unless delete all its reference",
      });
    }
    throw err;
  }
};

const _prop = {
  HIDDEN_FIELDS: ["createdAt", "updatedAt"],
  hideFieldsCondition: function (...args) {
    return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
  },
};
