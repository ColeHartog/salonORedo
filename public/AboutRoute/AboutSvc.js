angular.module("salono").service("AboutSvc", ["$http", function($http){

	this.GetAbout = function(id){
		if(id) var query = "?_id="+id;
		else var query = "";
		return $http({
			method: "GET",
			url: "/api/About/"+query,
		}).then(function(response){
			if(query) response.data = response.data[0];
			return response.data;
		});
	};

	this.CreateAbout = function(data){
		return $http({
			method: "POST",
			url: "/api/About/",
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.UpdateAbout = function(id, data){
		return $http({
			method: "PUT",
			url: "/api/About/"+id,
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.DeleteAbout = function(id){
		return $http({
			method: "DELETE",
			url: "/api/About/"+id,
		}).then(function(response){
			return response.data;
		});
	};

}]);
