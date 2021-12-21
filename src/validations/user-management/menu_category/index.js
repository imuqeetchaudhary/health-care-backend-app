const yup = require("yup");

exports.createMenuCategorySchema = yup.object().shape({
  description: yup.string().required(),
});
