$(document).ready(function() {

	$.ajax("/get_game_info").done(function(data) {
		console.log("Success, game info received")
	}).fail(function() {	
		console.log("Get game info failed")
	})

});