const menuCategoryService = require("../../../services/user-management/menu_category");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createMenuCategory = promise(async (req, res) => {
  const { description } = req.body;
  const actionPerformedBy = req.user.userId;

  const menuCategory = await menuCategoryService.saveMenuCategory({
    description,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new menu category",
    menuCategory,
  });
});

exports.getAllMenuCategory = promise(async (req, res) => {
  const menuCategory = await menuCategoryService.listAllMenuCategory();
  res.status(200).json({ menuCategory });
});

exports.getSingleMenuCategory = promise(async (req, res) => {
  const { id } = req.params;

  const menuCategory = await menuCategoryService.findById({ id });
  res.status(200).json({ menuCategory });
});

exports.deleteMenuCategory = promise(async (req, res) => {
  const { id } = req.params;
  const categoryId = id;

  const deletemenuCategory = await menuCategoryService.deleteMenuCategory({
    categoryId,
  });
  res.status(200).json({ message: "Successfully deleted menu category" });
});
