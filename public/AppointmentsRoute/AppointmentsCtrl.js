angular.module("salono").controller("AppointmentsCtrl", ["$scope", "AppointmentsSvc", function($scope, AppointmentsSvc){

	$scope.test = "Appointments Controller";

	$scope.GetAppointments = function(id){
		AppointmentsSvc.GetAppointments(id).then(function(response){
			$scope.Appointments = response;
		});
	};

	$scope.GetAppointments();

	$scope.CreateAppointments = function(data){
		AppointmentsSvc.CreateAppointments(data).then(function(response){
			$scope.GetAppointments();
		});
	};

	$scope.UpdateAppointments = function(id, data){
		AppointmentsSvc.UpdateAppointments(id, data).then(function(response){
			$scope.GetAppointments();
		});
	};

	$scope.DeleteAppointments = function(id){
		AppointmentsSvc.DeleteAppointments(id).then(function(response){
			$scope.GetAppointments();
		});
	};

}]);
