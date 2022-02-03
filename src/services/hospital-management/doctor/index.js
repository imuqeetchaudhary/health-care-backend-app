const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.saveDoctor = async({
    fee,
    experience,
    isAvailable,
    availablityDays,
    activeHours,
    userId,
    actionPerformedBy,
}) => {
    const doctor = {
        fee,
        experience,
        isAvailable,
        availablityDays,
        activeHours,
        userId,
        createdBy: actionPerformedBy,
        updatedBy: actionPerformedBy,
    };

    try {
        const newDoctor = await db.Doctor.create({...doctor });
        return newDoctor;
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err)) {
            throw new Exceptions.BadRequest({
                message: "Doctor already exists",
            });
        }
        throw err;
    }
};

exports.listAllDoctor = () => {
    return db.Doctor.findAll({
        attributes: [
            "doctorId",
            "fee",
            "experience",
            "isAvailable",
            "availablityDays",
            "activeHours",
        ],
        include: [{
            model: db.User,
            attributes: [
                "userId",
                "email",
                "displayName",
                "isActive",
                "isAdmin",
                "isSuperuser",
                "city",
                "country",
                "area",
                "postalCode",
                "phoneNumber",
                "image",
                "dob",
                "gender",

            ],
        }, ],
    });
};

exports.findById = ({ id }) => {
    return db.Doctor.findByPk(id, {
        attributes: [
            "fee",
            "experience",
            "isAvailable",
            "availablityDays",
            "activeHours",
        ],
        include: [{
            model: db.User,
            attributes: [
                "userId",
                "email",
                "displayName",
                "isActive",
                "isAdmin",
                "isSuperuser",
                "city",
                "country",
                "area",
                "postalCode",
                "phoneNumber",
                "image",
                "dob",
                "gender",
            ],
        }, ],
    });
};

exports.updateDoctor = async({
    doctorId,
    fee,
    experience,
    isAvailable,
    availablityDays,
    activeHours,
    userId,
    actionPerformBy,
}) => {
    const doctor = {
        fee,
        experience,
        isAvailable,
        availablityDays,
        activeHours,
        userId,
        updatedBy: actionPerformBy,
    };

    try {
        const updatedDoctor = await db.Doctor.update({...doctor }, { where: { doctorId } });

        if (dbUtils.isRecordFound(updatedDoctor))
            throw new Exceptions.NotFound({ message: "Doctor not found" });
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err))
            throw new Exceptions.BadRequest({ message: "Doctor already exists" });
        throw err;
    }
};

exports.deleteDoctor = async({ doctorId }) => {
    try {
        const deleteDoctor = await db.Doctor.destroy({
            where: { doctorId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete Doctor unless delete all its reference",
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