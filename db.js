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

exports.add_game_info = function(req, res) {
	console.log("Adding game info, db.js");
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

	database.collection('game_info', function(err, collection) {
		collection.update({}, game_info, { upsert: true }, function(err, result) {
			if (err) {
				console.log("ERROR: " + err);
			} else {
				console.log("Game info updated");
			}
		});
	});

	console.log(game_info);
	res.end();
}

exports.get_game_info = function(req, res) {
	console.log("In get game info.");
	database.collection('game_info', function(err, collection) {
		collection.findOne({}, function(err, item) {
			if (!err) {
				var game_info = {}
				game_info.vegetables = item.vegetables;
				game_info.plants = item.plants;
				game_info.terrorists = item.terrorists;
				game_info.ungulates = item.ungulates;
				game_info.chickens = item.chickens;
				game_info.murderers = item.murderers;
				game_info.team_1 = item.team_1;
				game_info.team_2 = item.team_2;
				game_info.team_3 = item.team_3;
				game_info.team_4 = item.team_4;
				console.log(game_info);
				res.send(game_info);
				res.end();
			} else {
				console.log("ERROR: get game info " + err);
			}
		});
	});
}

exports.get_questions = function(req, res) {
    console.log("In get questions");

    var question_1 = {
    'vegetables': [ ["what is the best veggie?", "asparagus"],
                    ["what is the worst veggie?", "canned green beans"],
                    ["what color is a green bean?", "green"],
                    ["is califlower good?", "depends"],
                    ["what is the most popular veggie?", "potato"] ] }

    var question_2 = {                
    'carnivorous_plants': [ ["carnivorous plants are super cool right?", "you bet"],
                            ["will they take over the world?", "true"],
                            ["what is the best trapping mechanism?", "pitfall"],
                            ["can plants really eat bugs?", "most definitely"],
                            ["does nathan own one?", "no" ] ] }

    var question_3 = {                          
    'terrorist_attacks': [ ["are they bad?", "yes"],
                           ["what attack happended on September 11th?", "911"],
                           ["why are there terrorists?", "i dont know"],
                           ["who is in charge of terrorist defense?", "trick question, more than one department"],
                           ["wouldnt the world be better without them?", "yes"] ] }

    var question_4 = {
    'ungulates': [ ["what is the best ungulate?", "probably a cow"],
                   ["name a ungulate with a super long neck?", "giraffe"],
                   ["which one tastes the best?", "pig"],
                   ["what ungulate does santa like best?", "reindeer"],
                   ["zerbras are pretty neat, right?", "yes"] ] }

    var question_5 = {
    'chickens': [ ["does brad own chickens?", "he wishes"],
                  ["why does brad like chickens?", "theyre cute"],
                  ["why does nathan like chickens?", "the soothing deep black color of their eyes"],
                  ["how many chickens does it take to change a lightbulb?", "trick question, they cant.."],
                  ["what sound does a chick make?", "bock"] ] }

    var question_6 = {
    'mass_murderers': [ ["who is the craziest looking murderer", "Charles Manson"],
                        ["who is the guy with the tiny mustache?", "Hitler"],
                        ["the Whitechapel Murderer, aka..",  "Jack the Ripper"],
                        ["do they suck?", "yeah"],
                        ["Mongol emperor killa?", "Genghis Khan" ] ] }      

    var current_categories = [];
    database.collection('game_info', function(err, collection) {
        collection.findOne({}, function(err, item) {
            if (!err) {
                var game_info = {}
                if (item.vegetables == 'true') {
                    current_categories.push(question_1);
                }
                if (item.plants == 'true') {
                    current_categories.push(question_2);
                }
                if (item.terrorists == 'true') {
                    current_categories.push(question_3);
                }
                if (item.ungulates == 'true') {
                    current_categories.push(question_4);
                }
                if (item.chickens == 'true') {
                    current_categories.push(question_5);
                }
                if (item.murderers == 'true') {
                    current_categories.push(question_6);
                }
                console.log("Categories: " + current_categories);

                res.send(current_categories);
                res.end();

            } else {
                console.log("ERROR: get game info " + err);
            }
        });
    });
    
}


