var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
	comments: Array,
	content: String,
	subId: String,
	title: String,
	date: Date
});

var Post= mongoose.model('post', PostSchema);

module.exports = Post;

