const { SQL_ERROR_CODE } = require("./error-code.utils");

function isRecordFound(record) {
  return record[0] === 0;
}

function isRecordDeleted(deletedCount) {
  return deletedCount === 1;
}

function isRecordDuplicate(err) {
  return err.original?.errno === SQL_ERROR_CODE.duplicateEntry;
}

function isFkFailed(err) {
  return err.original?.errno === SQL_ERROR_CODE.fkConstraintsFailed;
}

module.exports = {
  isRecordFound,
  isRecordDeleted,
  isRecordDuplicate,
  isFkFailed,
};
