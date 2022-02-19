exports.init = (sequelize, DataTypes) => {
	const Medicine = sequelize.define(
		'Medicine',
		{
			medicineId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			medicineName: {
				type: DataTypes.STRING(55),
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(255),
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
		{ underscored: true, tableName: 'medicine' }
	);

	return Medicine;
};
