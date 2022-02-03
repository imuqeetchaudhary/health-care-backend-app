const db = require("../../../models");
const dbUtils = require("../../error-check.util");
const Exceptions = require("../../../utils/custom-exceptions");

exports.savePatientHistory = async({
    duarationUnit,
    duarationCount,
    diseaseId,
    patientId,
    actionPerformedBy,
}) => {
    const patientHistory = {
        duarationUnit,
        duarationCount,
        diseaseId,
        patientId,
        createdBy: actionPerformedBy,
        updatedBy: actionPerformedBy,
    };

    try {
        const newPatientHistory = await db.PatientHistory.create({
            ...patientHistory,
        });
        return newPatientHistory;
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err)) {
            throw new Exceptions.BaPatientequest({
                message: "patient in disease already exists",
            });
        }
        throw err;
    }
};

exports.listAllPatientHistory = () => {
    return db.PatientHistory.findAll({
        attributes: ["pHistoryId", "duarationUnit", "duarationCount"],
        include: [{
                model: db.Disease,
                attributes: [
                    "diseaseId",
                    "diseaseName",
                    "diseaseDescription",
                    "diseaseSymptoms",
                    "diseaseCauses",
                    "diseaseType",
                    "riskFactor",
                ],
            },
            {
                model: db.Patient,
                attributes: ["patientId", "status", "userId"],
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
            },
        ],
    });
};

exports.findById = ({ id }) => {
    return db.PatientHistory.findByPk(id, {
        attributes: ["pHistoryId", "duarationUnit", "duarationCount"],
        include: [{
                model: db.Disease,
                attributes: [
                    "diseaseId",
                    "diseaseName",
                    "diseaseDescription",
                    "diseaseSymptoms",
                    "diseaseCauses",
                    "diseaseType",
                    "riskFactor",
                ],
            },
            {
                model: db.Patient,
                attributes: ["patientId", "status", "userId"],
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
            },
        ],
    });
};

exports.updatePatientHistory = async({
    pHistoryId,
    duarationUnit,
    duarationCount,
    diseaseId,
    patientId,
    actionPerformBy,
}) => {
    const patientHistory = {
        duarationUnit,
        duarationCount,
        diseaseId,
        patientId,
        updatedBy: actionPerformBy,
    };

    try {
        const updatedPatientHistory = await db.PatientHistory.update({...patientHistory }, { where: { patientId: pHistoryId } });

        if (dbUtils.isRecordFound(updatedPatientHistory))
            throw new Exceptions.NotFound({
                message: "patient in disease not found",
            });
    } catch (err) {
        if (dbUtils.isRecordDuplicate(err))
            throw new Exceptions.BaPatientequest({
                message: "patient in disease already exists",
            });
        throw err;
    }
};

exports.deletePatientHistory = async({ pHistoryId }) => {
    try {
        const deletePatientHistory = await db.PatientHistory.destroy({
            where: { pHistoryId },
        });
    } catch (err) {
        if (dbUtils.isFkFailed(err)) {
            throw new Exceptions.BaPatientequest({
                message: "Can't delete patient in disease unless delete all its reference",
            });
        }
        throw err;
    }
};