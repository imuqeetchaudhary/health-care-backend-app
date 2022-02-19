const pharmacyService = require('../../../services/pharmacy-management/pharmacy');
const { promise } = require('../../../middlewares/promise');

exports.createPharmacy = promise(async (req, res) => {
	const {
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
	} = req.body;
	const actionPerformedBy = req.user.userId;

	const pharmacy = await pharmacyService.savePharmacy({
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new pharmacy',
		pharmacy,
	});
});

exports.getAllPharmacy = promise(async (req, res) => {
	const pharmacy = await pharmacyService.listAllPharmacy();
	res.status(200).json({ pharmacy });
});

exports.getSinglePharmacy = promise(async (req, res) => {
	const { id } = req.params;

	const pharmacy = await pharmacyService.findById({ id });
	res.status(200).json({ pharmacy });
});

exports.updatePharmacy = promise(async (req, res) => {
	const { id } = req.params;
	const {
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
	} = req.body;
	const pharmacyId = id;
	const actionPerformBy = req.user.userId;

	const updatepharmacy = await pharmacyService.updatePharmacy({
		pharmacyId,
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
		actionPerformBy,
	});
	console.log(updatepharmacy);
	res.status(200).json({ message: 'Successfully updated pharmacy' });
});

exports.deletePharmacy = promise(async (req, res) => {
	const { id } = req.params;
	const pharmacyId = id;

	const deletepharmacy = await pharmacyService.deletePharmacy({
		pharmacyId,
	});
	res.status(200).json({ message: 'Successfully deleted pharmacy' });
});
