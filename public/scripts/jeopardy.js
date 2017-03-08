$(document).ready(function() {
	var game_info;
	
	console.log("hello");
	$.post("/get_game_info").done(function(data) {
		game_info = data;
		console.log(game_info);
		console.log("Success, game info received");
	}).fail(function() {	
		console.log("Get game info failed");
	})

	function populate(){
	
};

});
