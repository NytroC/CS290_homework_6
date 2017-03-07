var database = require('./db');
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.post('/game_info'), urlencodedParser, function(req, res) {
	database.get_game_info(req, res);
}

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendfile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(8080, function() {
	console.log("server listening at 8080");
});