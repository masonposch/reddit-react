const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	comments: Array,
	content: String,
	subId: String,
	title: String
});

module.exports = mongoose.model('post', Post);