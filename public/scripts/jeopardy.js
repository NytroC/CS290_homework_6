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

        var counter = 0;
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
    }).then(function mySuccess(response) {
        $scope.questions = response.data;
        $scope.column_1 = $scope.questions[0];
        $scope.column_2 = $scope.questions[1];
        $scope.column_3 = $scope.questions[2];
        $scope.column_4 = $scope.questions[3];
        $scope.column_5 = $scope.questions[4];

        $scope.click = function(category, index, column_index) {
            console.log("cat: " + category + " index: " + index + " c_i: " + column_index);
            alert(category + " " + index + " " + column_index);
            $("#question_container").css("display", "block");
            if (category == 'vegetables') {
                $("#question").html(JSON.stringify($scope.questions[column_index].vegetables[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].vegetables[index][1]));
            }  if (category == 'plants') {
                $("#question").html(JSON.stringify($scope.questions[column_index].carnivorous_plants[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].carnivorous_plants[index][1]));
            }  if (category == 'terrorists') {
                $("#question").html(JSON.stringify($scope.questions[column_index].terrorist_attacks[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].terrorist_attacks[index][1]));
            }  if (category == 'ungulates') {
                $("#question").html(JSON.stringify($scope.questions[column_index].ungulates[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].ungulates[index][1]));
            }  if (category == 'chickens') {
                $("#question").html(JSON.stringify($scope.questions[column_index].chickens[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].chickens[index][1]));
            }  if (category == 'murderers') {
                $("#question").html(JSON.stringify($scope.questions[column_index].mass_murderers[index][0]));
                $("#answer").html(JSON.stringify($scope.questions[column_index].mass_murderers[index][1]));
            }
        }

        $("#answer_button").click(function() {
            $("#answer").css("display", "block");
        })

        $scope.scores = [];
        for (var j = 0; j < $scope.teams.length; j++) {
            $scope.scores.push(j);
        }

    });

});

$(document).ready(function() {
    $("#close_container").click(function() {
        $("#question_container").css("display", "none");
    });
})









