var app = angular.module('myApp', []);
var categories = [];
app.controller('game_controller', function($scope, $http) {
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

        $scope.data = response.data;
        $scope.teams = []
        for (var key in $scope.data) {
            if ($scope.data[key] != "" && $scope.data[key] != "true" && $scope.data[key] != "false") {
                $scope.teams.push($scope.data[key]);
            }
        }
    }, function myError(response) {
       console.log("failed");
    });
});









