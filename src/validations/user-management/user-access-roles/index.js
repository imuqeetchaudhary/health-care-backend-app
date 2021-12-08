const yup = require("yup");

exports.createUserAccessRoleSchema = yup.object().shape({
  userId: yup.number().required(),
  roleIds: yup.number().required(),
});
