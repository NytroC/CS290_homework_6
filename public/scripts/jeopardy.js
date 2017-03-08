var app = angular.module("myApp", []);

$(document).ready(function() {
	
	$.post("/get_game_info").done(function(data) {
		
		app.categories = [];
		for (var key in data) {
			if (data[key] == "true") {
				categories.push(key);
			}
		}

		var teams = [];
		for (var key in data) {
			if (data[key] != "" && data[key] != "true" && data[key] != "false") {
				teams.push(data[key]);
			}
		}
		console.log("Success, game info received");

	}).fail(function() {	
		console.log("Get game info failed");
	});

});

app.controller("myCtrl", function($scope) {
	$scope.categories;
});