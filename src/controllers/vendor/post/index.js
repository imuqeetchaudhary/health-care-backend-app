const postService = require('../../../services/vendor/post');
const { promise } = require('../../../middlewares/promise');
const Exceptions = require('../../../utils/custom-exceptions');

exports.createPost = promise(async (req, res) => {
	const { title, description, category, estimatedPrice, status, dueDtae } = req.body;
	const actionPerformedBy = req.user.userId;

	const post = await postService.savePost({
		title,
		description,
		category,
		estimatedPrice,
		status,
		dueDtae,
		actionPerformedBy,
	});

	res.status(200).json({
		message: 'Successfully created new post',
		post,
	});
});

exports.getAllPost = promise(async (req, res) => {
	const post = await postService.listAllPost();
	res.status(200).json({ post });
});

exports.getAllPostByHospitalAdmin = promise(async (req, res) => {
	const { id } = req.params;
	const hospitalAdminId = id;

	const post = await postService.listAllPostByHospitalAdmin({ hospitalAdminId });
	res.status(200).json({ post });
});

exports.getAllPostByCategory = promise(async (req, res) => {
	const { category } = req.body;

	const post = await postService.listAllPostByCategory({ category });
	res.status(200).json({ post });
});

exports.getSinglePost = promise(async (req, res) => {
	const { id } = req.params;

	const post = await postService.findById({ id });
	res.status(200).json({ post });
});

exports.updatePost = promise(async (req, res) => {
	const { id } = req.params;
	const postId = id;
	const actionPerformedBy = req.user.userId;
	const { title, description, category, estimatedPrice, status, dueDtae } = req.body;

	const updatePost = await postService.updatePost({
		postId,
		title,
		description,
		category,
		estimatedPrice,
		status,
		dueDtae,
		actionPerformedBy,
	});
	res.status(200).json({ message: 'Successfully updated post' });
});

exports.deletePost = promise(async (req, res) => {
	const { id } = req.params;
	const postId = id;

	const deletePost = await postService.deletePost({
		postId,
	});
	res.status(200).json({ message: 'Successfully deleted post' });
});
