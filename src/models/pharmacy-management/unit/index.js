exports.init = (sequelize, DataTypes) => {
	const Unit = sequelize.define(
		'Unit',
		{
			unitId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
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
		{ underscored: true, tableName: 'unit' }
	);

	return Unit;
};
