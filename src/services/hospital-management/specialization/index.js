const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveSpecialization = async({
    details,
    doctorId,
    actionPerformedBy,
}) => {
    const specialization = {
        details,
        doctorId,
        createdBy: actionPerformedBy,
        updatedBy: actionPerformedBy,
    };

    try {
        const newSpecialization = await db.Specialization.create({
            ...specialization,
        });
        return newSpecialization;
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err)) {
            throw new Exceptions.BadRequest({
                message: "Specialization already exists",
            });
        }
        throw err;
    }
};

exports.listAllSpecialization = () => {
    return db.Specialization.findAll({
        attributes: ["specializationId", "details"],
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
    return db.Specialization.findByPk(id, {
        attributes: ["specializationId", "details"],
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
    return db.Specialization.findOne({
        where: {
            doctorId: id
        },
        attributes: ["specializationId", "details"],
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
exports.updateSpecialization = async({
    specializationId,
    details,
    doctorId,
    actionPerformBy,
}) => {
    const specialization = {
        details,
        doctorId,
        updatedBy: actionPerformBy,
    };

    try {
        const updatedSpecialization = await db.Specialization.update({...specialization }, { where: { specializationId } });

        if (dbUtils.isRecordFound(updatedSpecialization))
            throw new Exceptions.NotFound({
                message: "Specialization not found",
            });
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err))
            throw new Exceptions.BadRequest({
                message: "Specialization already exists",
            });
        throw err;
    }
};

exports.deleteSpecialization = async({ specializationId }) => {
    try {
        const deleteSpecialization = await db.Specialization.destroy({
            where: { specializationId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete Specialization unless delete all its reference",
            });
        }
        throw err;
    }
};

exports.deleteSpecializationByDr = async({ specializationId }) => {
    try {
        const deleteSpecialization = await db.Specialization.destroy({
            where: { doctorId: specializationId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete Specialization unless delete all its reference",
            });
        }
        throw err;
    }
};