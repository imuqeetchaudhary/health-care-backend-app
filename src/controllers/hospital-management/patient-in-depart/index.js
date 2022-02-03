const patientInDepartService = require("../../../services/hospital-management/patient-in-depart");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createPatientInDepart = promise(async(req, res) => {
    const { departmentId, patientId } = req.body;
    const actionPerformedBy = req.user.userId;

    const patientInDepart = await patientInDepartService.savePatientInDepart({
        departmentId,
        patientId,
        actionPerformedBy,
    });

    res.status(200).json({
        message: "Successfully created new patient in department",
        patientInDepart,
    });
});

exports.getAllPatientInDepart = promise(async(req, res) => {
    const patientInDepart = await patientInDepartService.listAllPatientInDepart();
    res.status(200).json({ patientInDepart });
});

exports.getSinglePatientInDepart = promise(async(req, res) => {
    const { id } = req.params;

    const patientInDepart = await patientInDepartService.findById({ id });
    res.status(200).json({ patientInDepart });
});

exports.GetByPatientInDepart = promise(async(req, res) => {
    const { id } = req.params;

    const patientInDepart = await patientInDepartService.findByPid({ id });
    res.status(200).json({ patientInDepart });
});

exports.updatePatientInDepart = promise(async(req, res) => {
    const { id } = req.params;
    const { departmentId, patientId } = req.body;
    const patientInDepartId = id;
    const actionPerformBy = req.user.userId;

    const updatePatientInDepart =
        await patientInDepartService.updatePatientInDepart({
            patientInDepartId,
            departmentId,
            patientId,
            actionPerformBy,
        });
    res
        .status(200)
        .json({ message: "Successfully updated patient in department" });
});

exports.deletePatientInDepart = promise(async(req, res) => {
    const { id } = req.params;
    const patientInDepartId = id;

    const deletePatientInDepart =
        await patientInDepartService.deletePatientInDepart({
            patientInDepartId,
        });
    res
        .status(200)
        .json({ message: "Successfully deleted patient in department" });
});