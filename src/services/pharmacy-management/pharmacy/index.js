const db = require('../../../models');
const dbUtils = require('../../error-check.util');
const Exceptions = require('../../../utils/custom-exceptions');

exports.savePharmacy = async ({
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
}) => {
	const pharmacy = {
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
		createdBy: actionPerformedBy,
		updatedBy: actionPerformedBy,
	};

	try {
		const newPharmacy = await db.Pharmacy.create({ ...pharmacy });
		return newPharmacy;
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err)) {
			throw new Exceptions.BadRequest({
				message: 'Pharmacy already exists',
			});
		}
		throw err;
	}
};

exports.listAllPharmacy = () => {
	return db.Pharmacy.findAll({
		include: [{ model: db.User }],
	});
};

exports.findById = ({ id }) => {
	return db.Pharmacy.findByPk(id, {
		include: [{ model: db.User }],
	});
};

exports.updatePharmacy = async ({
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
}) => {
	const pharmacy = {
		pharmacyName,
		area,
		city,
		country,
		postalCode,
		licenceNumber,
		phoneNo,
		email,
		adminId,
		updatedBy: actionPerformBy,
	};

	try {
		const updatedPharmacy = await db.Pharmacy.update(
			{ ...pharmacy },
			{ where: { pharmacyId } }
		);

		if (dbUtils.isRecordFound(updatedPharmacy))
			throw new Exceptions.NotFound({ message: 'Pharmacy not found' });
	} catch (err) {
		if (dbUtils.isRecordDuplicate(err))
			throw new Exceptions.BadRequest({ message: 'Pharmacy already exists' });
		throw err;
	}
};

exports.deletePharmacy = async ({ pharmacyId }) => {
	try {
		const deletePharmacy = await db.Pharmacy.destroy({
			where: { pharmacyId },
		});
	} catch (err) {
		if (dbUtils.isFkFailed(err)) {
			throw new Exceptions.BadRequest({
				message: "Can't delete Pharmacy unless delete all its reference",
			});
		}
		throw err;
	}
};
