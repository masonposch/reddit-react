const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//require Post Schema
var Post = require('./api/models/post');

const app = express();

const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// app.use('/posts', posts);

mongoose.connect('mongodb://localhost/reddit');
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//send a GET request to retieve most recent data
app.get('/api', function(req, res){
	Post.find().sort([
		["date", "decending"]
	]).limit(100).exec(function(err, doc){
		if(err){
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});


//Create a route that will send POST requests to save each search
app.post('/api', function(req, res){
	console.log("BODY:" + req.body.location);

	Post.create({
			comments: req.body.comments,
			content: req.body.content,
			subId: req.body.subId,
			title: req.body.title,
			date: Date.now()
		}, function(err){
			if(err){
				console.log(err);
			}
			else {
				res.send("Saved search");
			}
	});
}); 


app.listen(PORT, () => {
	console.log('Server listening on PORT:' + PORT);
});




