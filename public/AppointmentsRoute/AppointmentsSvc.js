angular.module("salono").service("AppointmentsSvc", ["$http", function($http){

	this.GetAppointments = function(id){
		if(id) var query = "?_id="+id;
		else var query = "";
		return $http({
			method: "GET",
			url: "/api/Appointments/"+query,
		}).then(function(response){
			if(query) response.data = response.data[0];
			return response.data;
		});
	};

	this.CreateAppointments = function(data){
		return $http({
			method: "POST",
			url: "/api/Appointments/",
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.UpdateAppointments = function(id, data){
		return $http({
			method: "PUT",
			url: "/api/Appointments/"+id,
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.DeleteAppointments = function(id){
		return $http({
			method: "DELETE",
			url: "/api/Appointments/"+id,
		}).then(function(response){
			return response.data;
		});
	};

}]);
