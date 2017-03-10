// var app = angular.module("myApp", []);
// var categories = ["A","B"];
// $(document).ready(function() {
	
// 	$.post("/get_game_info").done(function(data) {
		
		
// 		for (var key in data) {
// 			if (data[key] == "true") {
// 				categories.push(key);
// 			}
// 		}
// 		console.log(categories);

// 		var teams = [];
// 		for (var key in data) {
// 			if (data[key] != "" && data[key] != "true" && data[key] != "false") {
// 				teams.push(data[key]);
// 			}
// 		}
// 		console.log(teams);
// 		console.log("Success, game info received");

// 	}).fail(function() {	
// 		console.log("Get game info failed");
// 	});

// });
var app = angular.module('myApp', []);
	var categories = [];
	app.controller('myCtrl', function($scope, $http) {
	    $http({
	        method : "POST",
	        url : "/get_game_info"
	    }).then(function mySucces(response) {
	        $scope.data = response.data;
	        $scope.categories = []
	        for (var key in $scope.data) {
				if ($scope.data[key] == "true") {
					$scope.categories.push(key);
					console.log(key);
				}
			}
	    }, function myError(response) {
	       console.log("failed");
	    });
	});
