$(document).ready(function() {
	
	console.log("hello");
	$.post("/get_game_info").done(function(data) {
		
		var catergories = [];
		for (var key in data) {
			if (data[key] == "true") {
				catergories.push(key);
			}
		}

		var teams = [];
		for (var key in data) {
			if (data[key] != "" && data[key] != "true" && data[key] != "false") {
				teams.push(data[key]);
			}
		}
		console.log(data);
		console.log("Success, game info received");
		console.log(catergories);
		console.log(teams);
	}).fail(function() {	
		console.log("Get game info failed");
	});

});
