angular.module("salono").controller("ProductsCtrl", ["$scope", function($scope){
    
    $scope.Selected = "Oribe";
    
	$scope.Products = ["Oribe", "Phytologie", "Kevin Murphy"];
    
    $scope.ProductDetails = {
        "Oribe" : {text: "Straight from the runway, Oribe is our second line that has made its way from the fashion world to the salon. The beautiful packaging is just the beginning. Oribe was created for the client that wants luxury, while still enjoying the benefits of a color-safe, hydrating product line. One of the finest in hair care products, Oribe boasts long-lasting styles with minimal expertise needed.", url: "./images/products/oribe.png"},
        "Phytologie" : {text: "Phytologie is a comprehensive line that covers every haircare need from maintenance and treatment to color care and styling. Their mission is to use the most effective active ingredients to maintain a healthy scalp and sustain your hair’s natural beauty.", url: "./images/products/phyto.png"},
        "Kevin Murphy" : {text: "Kevin Murphy is a fashion-focused product line originally created by Kevin Murphy to meet his needs as an editorial hair stylist. Murphy’s products provide performance, strength and longevity to support today’s ever-changing looks.", url: "./images/products/kevinmurphy.png"}
    };
    
    $scope.SelectProduct = (name) => {
        $scope.Selected = name;
    }

}]);
