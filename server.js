var database = require('./db');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.post('/game_info', urlencodedParser, function(req, res) {
	database.add_game_info(req, res);
});

app.post('/get_questions', urlencodedParser, function(req, res) {
    database.get_questions(req, res);
});

app.use(express.static('public'));

app.get('/jeopardy', function(req, res){
	res.sendFile(path.join(__dirname + '/public/jeopardy.html'));
});

app.post('/get_game_info', function(req, res) {
	database.get_game_info(req, res);
});

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(8080, function() {
	console.log("server listening at 8080");
});