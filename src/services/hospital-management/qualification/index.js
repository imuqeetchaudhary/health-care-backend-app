const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveQualification = async({
    details,
    doctorId,
    actionPerformedBy,
}) => {
    const qualification = {
        details,
        doctorId,
        createdBy: actionPerformedBy,
        updatedBy: actionPerformedBy,
    };

    try {
        const newQualification = await db.Qualification.create({
            ...qualification,
        });
        return newQualification;
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err)) {
            throw new Exceptions.BadRequest({
                message: "qualification already exists",
            });
        }
        throw err;
    }
};

exports.listAllQualification = () => {
    return db.Qualification.findAll({
        attributes: ["qualificationId", "details"],
        include: [{
            model: db.Doctor,
            attributes: ["doctorId", "userId"],
            include: [{
                model: db.User,
                attributes: [
                    "userId",
                    "email",
                    "displayName",
                    "isActive",
                    "isAdmin",
                    "isSuperuser",
                ],
            }, ],
        }, ],
    });
};

exports.findById = ({ id }) => {
    return db.Qualification.findByPk(id, {
        attributes: ["qualificationId", "details"],
        include: [{
            model: db.Doctor,
            attributes: ["doctorId", "userId"],
            include: [{
                model: db.User,
                attributes: [
                    "userId",
                    "email",
                    "displayName",
                    "isActive",
                    "isAdmin",
                    "isSuperuser",
                ],
            }, ],
        }, ],
    });
};

exports.findByDrId = ({ id }) => {
    return db.Qualification.findOne({
        where: {
            doctorId: id
        },
        attributes: ["qualificationId", "details"],
        include: [{
            model: db.Doctor,
            attributes: ["doctorId", "userId"],
            include: [{
                model: db.User,
                attributes: [
                    "userId",
                    "email",
                    "displayName",
                    "isActive",
                    "isAdmin",
                    "isSuperuser",
                ],
            }, ],
        }, ],
    });
};

exports.updateQualification = async({
    qualificationId,
    details,
    doctorId,
    actionPerformBy,
}) => {
    const qualification = {
        details,
        doctorId,
        updatedBy: actionPerformBy,
    };

    try {
        const updatedQualification = await db.Qualification.update({...qualification }, { where: { qualificationId } });

        if (dbUtils.isRecordFound(updatedQualification))
            throw new Exceptions.NotFound({
                message: "qualification not found",
            });
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err))
            throw new Exceptions.BadRequest({
                message: "qualification already exists",
            });
        throw err;
    }
};

exports.deleteQualification = async({ qualificationId }) => {
    try {
        const deleteQualification = await db.Qualification.destroy({
            where: { qualificationId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete qualification unless delete all its reference",
            });
        }
        throw err;
    }
};

exports.deleteQualificationByDr = async({ qualificationId }) => {
    try {
        const deleteQualification = await db.Qualification.destroy({
            where: { doctorId: qualificationId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete qualification unless delete all its reference",
            });
        }
        throw err;
    }
};

const _prop = {
    HIDDEN_FIELDS: ["createdAt", "updatedAt"],
    hideFieldsCondition: function(...args) {
        return { attributes: { exclude: [...this.HIDDEN_FIELDS, ...args] } };
    },
};