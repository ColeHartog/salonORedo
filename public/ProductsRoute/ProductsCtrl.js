angular.module("salono").controller("ProductsCtrl", ["$scope", function($scope){
    
    $scope.Selected = "Kevin Murphy";
    
	// $scope.Products = ["Kevin Murphy", "Phyto", "Davines"];
	$scope.Products = ["Kevin Murphy", "Davines"];
    
    $scope.ProductDetails = {
        "Davines" : {text: "Information Coming Soon...", url: ""},
        // "Phyto" : {text: "Phyto is a comprehensive line that covers every haircare need from maintenance and treatment to color care and styling. Their mission is to use the most effective active ingredients to maintain a healthy scalp and sustain your hair’s natural beauty.", url: "./images/products/phytonew.png"},
        "Kevin Murphy" : {text: "Kevin Murphy is a fashion-focused product line originally created by Kevin Murphy to meet his needs as an editorial hair stylist. Murphy’s products provide performance, strength and longevity to support today’s ever-changing looks.", url: "./images/products/kevinmurphynew.png"}
    };
    
    $scope.SelectProduct = function(name) {
        $scope.Selected = name;
    }

}]);
