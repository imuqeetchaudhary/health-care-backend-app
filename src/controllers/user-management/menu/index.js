const menuService = require("../../../services/user-management/menu");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createMenu = promise(async (req, res) => {
  let { description, link, icon, parentId } = req.body;
  const actionPerformedBy = req.user.userId;

  if (parentId == 0) {
    parentId = null;
  }

  const menu = await menuService.saveMenu({
    description,
    link,
    icon,
    parentId,
    actionPerformedBy,
  });

  res.status(200).json({
    message: "Successfully created new menu",
    menu,
  });
});

exports.getAllMenus = promise(async (req, res) => {
  const menu = await menuService.listAllMenus();
  res.status(200).json({ menu });
});

exports.getSingleMenu = promise(async (req, res) => {
  const { id } = req.params;

  const menu = await menuService.findById({ id });
  res.status(200).json({ menu });
});

exports.deleteMenu = promise(async (req, res) => {
  const { id } = req.params;
  const menuId = id;

  const deletemenu = await menuService.deleteMenu({
    menuId,
  });
  res.status(200).json({ message: "Successfully deleted menu" });
});
