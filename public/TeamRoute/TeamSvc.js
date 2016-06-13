angular.module("salono").service("TeamSvc", ["$http", function($http){

	this.GetTeam = function(id){
		if(id) var query = "?_id="+id;
		else var query = "";
		return $http({
			method: "GET",
			url: "/api/Team/"+query,
		}).then(function(response){
			if(query) response.data = response.data[0];
			return response.data;
		});
	};

	this.CreateTeam = function(data){
		return $http({
			method: "POST",
			url: "/api/Team/",
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.UpdateTeam = function(id, data){
		return $http({
			method: "PUT",
			url: "/api/Team/"+id,
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.DeleteTeam = function(id){
		return $http({
			method: "DELETE",
			url: "/api/Team/"+id,
		}).then(function(response){
			return response.data;
		});
	};

}]);
