const yup = require("yup");

exports.createMenuAccessRoleSchema = yup.object().shape({
  roleId: yup.number().required(),
  menuIds: yup.number().required(),
});
