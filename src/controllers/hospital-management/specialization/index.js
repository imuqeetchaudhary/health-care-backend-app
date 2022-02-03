const specializationService = require("../../../services/hospital-management/specialization");
const { promise } = require("../../../middlewares/promise");
const Exceptions = require("../../../utils/custom-exceptions");

exports.createSpecialization = promise(async(req, res) => {
    const { details, doctorId } = req.body;
    const actionPerformedBy = req.user.userId;

    const specialization = await specializationService.saveSpecialization({
        details,
        doctorId,
        actionPerformedBy,
    });

    res.status(200).json({
        message: "Successfully created new specialization",
        specialization,
    });
});

exports.getAllSpecialization = promise(async(req, res) => {
    const specialization = await specializationService.listAllSpecialization();
    res.status(200).json({ specialization });
});

exports.getSingleSpecialization = promise(async(req, res) => {
    const { id } = req.params;

    const specialization = await specializationService.findById({ id });
    res.status(200).json({ specialization });
});

exports.getSingleSpecializationByDr = promise(async(req, res) => {
    const { id } = req.params;

    const specialization = await specializationService.findByDrId({ id });
    res.status(200).json({ specialization });
});

exports.updateSpecialization = promise(async(req, res) => {
    const { id } = req.params;
    const { details, doctorId } = req.body;
    const specializationId = id;
    const actionPerformBy = req.user.userId;

    const updatespecialization = await specializationService.updateSpecialization({
        specializationId,
        details,
        doctorId,
        actionPerformBy,
    });
    res.status(200).json({ message: "Successfully updated specialization" });
});

exports.deleteSpecialization = promise(async(req, res) => {
    const { id } = req.params;
    const specializationId = id;

    const deletespecialization = await specializationService.deleteSpecialization({
        specializationId,
    });
    res.status(200).json({ message: "Successfully deleted specialization" });
});

exports.deleteSpecializationByDr = promise(async(req, res) => {
    const { id } = req.params;
    const specializationId = id;

    const deletespecialization = await specializationService.deleteSpecializationByDr({
        specializationId,
    });
    res.status(200).json({ message: "Successfully deleted specialization" });
});