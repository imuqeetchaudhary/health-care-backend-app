const Exceptions = require("../../../utils/custom-exceptions");
const utils = require("../../error-check.util");

const INCLUDED_FIELDS = ["menuId", "description", "link", "icon", "parentId"];

function queryForGetAndCheckMenuExistsForRole(roleId) {
  return `
      SELECT 
        m.menu_id AS menuId,
        m.description,
        m.parent_id AS parentId,
        (
        SELECT COUNT(menu_id)
            FROM ad_menu_access_roles mr
            WHERE mr.menu_id = m.menu_id and mr.role_id = ${roleId}
        ) AS isFound
      FROM ad_menu m
      ORDER BY m.menu_id
  `;
}

function throwErrorWhenCreateOrUpdate(err) {
  if (utils.isFkFailed(err))
    throw new Exceptions.BadRequest({ message: "User is not found" });
  else if (utils.isRecordDuplicate(err))
    throw new Exceptions.BadRequest({
      message: "Alread record exists with provided description",
    });
}

module.exports = {
  INCLUDED_FIELDS,
  queryForGetAndCheckMenuExistsForRole,
  throwErrorWhenCreateOrUpdate,
};
