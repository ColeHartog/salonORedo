angular.module("salono").service("ServicesSvc", ["$http", function($http){

	this.GetServices = function(id){
		if(id) var query = "?_id="+id;
		else var query = "";
		return $http({
			method: "GET",
			url: "/api/Services/"+query,
		}).then(function(response){
			if(query) response.data = response.data[0];
			return response.data;
		});
	};

	this.CreateServices = function(data){
		return $http({
			method: "POST",
			url: "/api/Services/",
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.UpdateServices = function(id, data){
		return $http({
			method: "PUT",
			url: "/api/Services/"+id,
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.DeleteServices = function(id){
		return $http({
			method: "DELETE",
			url: "/api/Services/"+id,
		}).then(function(response){
			return response.data;
		});
	};

}]);
