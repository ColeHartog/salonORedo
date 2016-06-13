angular.module("salono").controller("TeamCtrl", ["$scope", "TeamSvc", function($scope, TeamSvc){

	$scope.test = "Team Controller";

	$scope.GetTeam = function(id){
		TeamSvc.GetTeam(id).then(function(response){
			$scope.Team = response;
		});
	};

	$scope.GetTeam();

	$scope.CreateTeam = function(data){
		TeamSvc.CreateTeam(data).then(function(response){
			$scope.GetTeam();
		});
	};

	$scope.UpdateTeam = function(id, data){
		TeamSvc.UpdateTeam(id, data).then(function(response){
			$scope.GetTeam();
		});
	};

	$scope.DeleteTeam = function(id){
		TeamSvc.DeleteTeam(id).then(function(response){
			$scope.GetTeam();
		});
	};

}]);
