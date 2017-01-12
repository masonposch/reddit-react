const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/by-sub/:sub', (req, res) => {
	let subId = req.params.sub.toLowerCase();
	subId = subId.replace(/ /g, ' ');

	Post.find({
		subId: subId	
	}, (err, results) => {
		res.json(results);
	});
});

module.exports = router;