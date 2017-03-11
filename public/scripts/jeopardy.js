var app = angular.module('myApp', []);
var categories = [];
app.controller('game_controller', function($scope, $http) {
    $scope.value = 0;
    $http({
        method : "POST",
        url : "/get_game_info"
    }).then(function mySucces(response) {
        $scope.data = response.data;
        $scope.categories = [];
        for (var key in $scope.data) {
			if ($scope.data[key] == "true") {
				$scope.categories.push(key);
				console.log(key);
			}
		}

        $scope.data = response.data;
        $scope.teams = [];
        for (var key in $scope.data) {
            if ($scope.data[key] != "" && $scope.data[key] != "true" && $scope.data[key] != "false") {
                $scope.teams.push($scope.data[key]);
            }
        }
    }, function myError(response) {
       console.log("failed");
    });

    $http({
        method: "POST", 
        url: "/get_questions"
    }).then(function mySucces(response) {
        $scope.questions = response.data;
        $scope.column_1 = $scope.questions[0];
        $scope.column_2 = $scope.questions[1];
        $scope.column_3 = $scope.questions[2];
        $scope.column_4 = $scope.questions[3];
        $scope.column_5 = $scope.questions[4];

        $scope.click = function(category, index) {
            alert(category + " " + index);
            $("#question_container").css("display", "block");
        }

    });

});

$(document).ready(function() {
    $("#close_container").click(function() {
        $("#question_container").css("display", "none");
    });
})









