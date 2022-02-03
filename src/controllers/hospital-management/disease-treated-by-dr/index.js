const diseaseTreatedByDrService = require("../../../services/hospital-management/disease-treated-by-dr");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createDiseaseTreatedByDr = promise(async(req, res) => {
    const { diseaseId, doctorId } = req.body;
    const actionPerformedBy = req.user.userId;

    const diseaseTreatedByDr =
        await diseaseTreatedByDrService.saveDiseaseTreatedByDr({
            diseaseId,
            doctorId,
            actionPerformedBy,
        });

    res.status(200).json({
        message: "Successfully created new Disease Treated By Doctor",
        diseaseTreatedByDr,
    });
});

exports.getAllDiseaseTreatedByDr = promise(async(req, res) => {
    const diseaseTreatedByDr =
        await diseaseTreatedByDrService.listAllDiseaseTreatedByDr();
    res.status(200).json({ diseaseTreatedByDr });
});

exports.getSingleDiseaseTreatedByDr = promise(async(req, res) => {
    const { id } = req.params;

    const diseaseTreatedByDr = await diseaseTreatedByDrService.findById({ id });
    res.status(200).json({ diseaseTreatedByDr });
});

exports.getSingleDiseaseTreated = promise(async(req, res) => {
    const { id } = req.params;

    const diseaseTreatedByDr = await diseaseTreatedByDrService.findByDrId({ id });
    res.status(200).json({ diseaseTreatedByDr });
});

exports.updateDiseaseTreatedByDr = promise(async(req, res) => {
    const { id } = req.params;
    const { diseaseId, doctorId } = req.body;
    const diseaseTreatedByDrId = id;
    const actionPerformBy = req.user.userId;

    const updatediseaseTreatedByDr =
        await diseaseTreatedByDrService.updateDiseaseTreatedByDr({
            diseaseTreatedByDrId,
            diseaseId,
            doctorId,
            actionPerformBy,
        });
    res
        .status(200)
        .json({ message: "Successfully updated Disease Treated By Doctor" });
});

exports.deleteDiseaseTreatedByDr = promise(async(req, res) => {
    const { id } = req.params;
    const diseaseTreatedByDrId = id;

    const deleteDiseaseTreatedByDr =
        await diseaseTreatedByDrService.deleteDiseaseTreatedByDr({
            diseaseTreatedByDrId,
        });
    res
        .status(200)
        .json({ message: "Successfully deleted Disease Treated By Doctor" });
});

exports.deleteDiseaseTreated = promise(async(req, res) => {
    const { id } = req.params;
    const diseaseTreatedByDrId = id;

    const deleteDiseaseTreatedByDr =
        await diseaseTreatedByDrService.deleteDiseaseTreated({
            diseaseTreatedByDrId,
        });
    res
        .status(200)
        .json({ message: "Successfully deleted Disease Treated By Doctor" });
});