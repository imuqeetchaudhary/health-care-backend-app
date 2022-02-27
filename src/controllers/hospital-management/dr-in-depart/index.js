const drInDepartService = require("../../../services/hospital-management/dr-in-depart");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createDrInDepart = promise(async(req, res) => {
    const { departmentId, doctorId } = req.body;
    const actionPerformedBy = req.user.userId;

    const drInDepart = await drInDepartService.saveDrInDepart({
        departmentId,
        doctorId,
        actionPerformedBy,
    });

    res.status(200).json({
        message: "Successfully created new doctor in department",
        drInDepart,
    });
});

exports.getAllDrInDepart = promise(async(req, res) => {
    const drInDepart = await drInDepartService.listAllDrInDepart();
    res.status(200).json({ drInDepart });
});

exports.getSingleDrInDepart = promise(async(req, res) => {
    const { id } = req.params;

    const drInDepart = await drInDepartService.findById({ id });
    res.status(200).json({ drInDepart });
});

exports.getSingleDrInDepartByDoctor = promise(async(req, res) => {
    const { id } = req.params;
    console.log({ id });

    const drInDepart = await drInDepartService.findByDoctorId({ id });
    res.status(200).json({ drInDepart });
});

exports.getSingleDrInDepartByDep = promise(async(req, res) => {
    const { id } = req.params;
    console.log({ id });

    const drInDepart = await drInDepartService.findByDepId({ id });
    res.status(200).json({ drInDepart });
});

exports.updateDrInDepart = promise(async(req, res) => {
    const { id } = req.params;
    const { departmentId, doctorId } = req.body;
    const drInDepartId = id;
    const actionPerformBy = req.user.userId;

    const updatedrInDepart = await drInDepartService.updateDrInDepart({
        drInDepartId,
        departmentId,
        doctorId,
        actionPerformBy,
    });
    console.log(updatedrInDepart);
    res
        .status(200)
        .json({ message: "Successfully updated doctor in department" });
});

exports.deleteDrInDepart = promise(async(req, res) => {
    const { id } = req.params;
    const drInDepartId = id;

    const deletedrInDepart = await drInDepartService.deleteDrInDepart({
        drInDepartId,
    });
    res
        .status(200)
        .json({ message: "Successfully deleted doctor in department" });
});

exports.deleteDrInDepartByDr = promise(async(req, res) => {
    const { id } = req.params;
    const drInDepartId = id;

    const deletedrInDepart = await drInDepartService.deleteDrInDepartByDr({
        drInDepartId,
    });
    res
        .status(200)
        .json({ message: "Successfully deleted doctor in department" });
});