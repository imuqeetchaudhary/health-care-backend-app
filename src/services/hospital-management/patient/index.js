const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.savePatient = async({ status, userId, actionPerformedBy }) => {
    const patient = {
        status,
        userId,
        createdBy: actionPerformedBy,
        updatedBy: actionPerformedBy,
    };

    try {
        const newPatient = await db.Patient.create({...patient });
        return newPatient;
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err)) {
            throw new Exceptions.BadRequest({
                message: "Patient already exists",
            });
        }
        throw err;
    }
};

exports.listAllPatient = () => {
    return db.Patient.findAll({
        attributes: ["patientId", "status"],
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
                "postalCode",
                "area",
                "phoneNumber",
                "dob"

            ],
        }, ],
    });
};

exports.findById = ({ id }) => {
    return db.Patient.findByPk(id, {
        attributes: ["patientId", "status"],
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
                "postalCode",
                "area",
                "phoneNumber",
                "dob",
                "image",
                "gender"
            ],
        }, ],
    });
};

exports.updatePatient = async({
    patientId,
    status,
    userId,
    actionPerformBy,
}) => {
    const patient = {
        status,
        userId,
        updatedBy: actionPerformBy,
    };

    try {
        const updatedPatient = await db.Patient.update({...patient }, { where: { patientId } });

        if (dbUtils.isRecordFound(updatedPatient))
            throw new Exceptions.NotFound({ message: "Patient not found" });
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err))
            throw new Exceptions.BadRequest({ message: "Patient already exists" });
        throw err;
    }
};

exports.deletePatient = async({ patientId }) => {
    try {
        const deletePatient = await db.Patient.destroy({
            where: { patientId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BadRequest({
                message: "Can't delete Patient unless delete all its reference",
            });
        }
        throw err;
    }
};