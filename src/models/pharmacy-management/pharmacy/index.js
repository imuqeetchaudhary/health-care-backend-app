exports.init = (sequelize, DataTypes, { User }) => {
	const Pharmacy = sequelize.define(
		'Pharmacy',
		{
			pharmacyId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			pharmacyName: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			area: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			city: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			postalCode: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			licenceNumber: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			phoneNo: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			adminId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			createdBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			updatedBy: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
		},
		{ underscored: true, tableName: 'pharmacy' }
	);

	User.hasOne(Pharmacy, { foreignKey: 'admin_id' });
	Pharmacy.belongsTo(User, { foreignKey: 'admin_id' });

	return Pharmacy;
};
