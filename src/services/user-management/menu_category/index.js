const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveMenuCategory = async ({ description, actionPerformedBy }) => {
  const menuCategory = {
    description,
    createdBy: actionPerformedBy,
    updatedBy: actionPerformedBy,
  };

  try {
    const newMenuCategory = await db.MenuCategory.create({ ...menuCategory });
    return newMenuCategory;
  } catch (err) {
    if (dbUtils.isRecordDuplicate(err)) {
      throw new Exceptions.BadRequest({ message: "Menu Category already exists" });
    }
    throw err;
  }
};

exports.listAllMenuCategory = () => {
  return db.MenuCategory.findAll({
    attributes: ["categoryId", "description"],
  });
};

exports.findById = ({ id }) => {
  return db.MenuCategory.findByPk(id, _prop.hideFieldsCondition());
};

exports.deleteMenuCategory = async ({ categoryId }) => {
  try {
    const deleteMenuCategory = await db.MenuCategory.destroy({
      where: { categoryId },
    });
  } catch (err) {
    if (dbUtils.isFkFailed(err)) {
      throw new Exceptions.BadRequest({
        message: "Can't delete Menu Category unless delete all its reference",
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
