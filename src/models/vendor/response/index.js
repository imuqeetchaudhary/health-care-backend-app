exports.init = (sequelize, DataTypes, { User, Post }) => {
	const Response = sequelize.define(
		'Response',
		{
			responseId: {
				type: DataTypes.INTEGER.UNSIGNED,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(1000),
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			dueDtae: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			postId: {
				type: DataTypes.INTEGER.UNSIGNED,
				allowNull: false,
			},
			vendorId: {
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
		{ underscored: true, tableName: 'response' }
	);

	User.hasMany(Response, { foreignKey: 'vendor_id' });
	Response.belongsTo(User, { foreignKey: 'vendor_id' });

	Post.hasMany(Response, { foreignKey: 'post_id' });
	Response.belongsTo(Post, { foreignKey: 'post_id' });

	return Response;
};
