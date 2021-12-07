const yup = require("yup");

exports.createRoleSchema = yup.object().shape({
  description: yup.string().required(),
});
