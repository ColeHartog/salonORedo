angular.module("salono").controller("AboutCtrl", ["$scope", "AboutSvc", function($scope, AboutSvc){

	$scope.test = "About Controller";

	$scope.GetAbout = function(id){
		AboutSvc.GetAbout(id).then(function(response){
			$scope.About = response;
		});
	};

	$scope.GetAbout();

	$scope.CreateAbout = function(data){
		AboutSvc.CreateAbout(data).then(function(response){
			$scope.GetAbout();
		});
	};

	$scope.UpdateAbout = function(id, data){
		AboutSvc.UpdateAbout(id, data).then(function(response){
			$scope.GetAbout();
		});
	};

	$scope.DeleteAbout = function(id){
		AboutSvc.DeleteAbout(id).then(function(response){
			$scope.GetAbout();
		});
	};

}]);
