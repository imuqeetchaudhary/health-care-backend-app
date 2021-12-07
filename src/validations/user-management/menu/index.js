const yup = require("yup");

exports.createMenuSchema = yup.object().shape({
  description: yup.string().required(),
  link: yup.string().required(),
  icon: yup.string(),
  parentId: yup.string(),
});
