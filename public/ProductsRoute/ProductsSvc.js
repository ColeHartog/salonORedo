angular.module("salono").service("ProductsSvc", ["$http", function($http){

	this.GetProducts = function(id){
		if(id) var query = "?_id="+id;
		else var query = "";
		return $http({
			method: "GET",
			url: "/api/Products/"+query,
		}).then(function(response){
			if(query) response.data = response.data[0];
			return response.data;
		});
	};

	this.CreateProducts = function(data){
		return $http({
			method: "POST",
			url: "/api/Products/",
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.UpdateProducts = function(id, data){
		return $http({
			method: "PUT",
			url: "/api/Products/"+id,
			data: {data: data.data}
		}).then(function(response){
			return response.data;
		});
	};

	this.DeleteProducts = function(id){
		return $http({
			method: "DELETE",
			url: "/api/Products/"+id,
		}).then(function(response){
			return response.data;
		});
	};

}]);
