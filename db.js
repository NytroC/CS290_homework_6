var mongo = require('mongodb');
var server = new mongo.Server('localhost', 27017, {auto_reconnect:true});
var database = new mongo.Db('jeopardy', server);

database.open(function(err,database) {    
	if(!err) {        
		console.log("Connected to database");
	} else {
		console.log("Looks like a db error."+ err);
	}
});

exports.get_game_info = function(req, res) {
	console.log("Getting game info, db.js");
	var game_info = {};
	game_info.vegetables = req.body.vegetables;
	game_info.plants = req.body.plants;
	game_info.terrorists = req.body.terrorists;
	game_info.ungulates = req.body.ungulates;
	game_info.chickens = req.body.chickens;
	game_info.murderers = req.body.murderers;
	game_info.team_1 = req.body.team_1;
	game_info.team_2 = req.body.team_2;
	game_info.team_3 = req.body.team_3;
	game_info.team_4 = req.body.team_4;

	console.log(game_info);
	res.send(game_info);
	res.end();
}