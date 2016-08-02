angular.module("salono").controller("ProductsCtrl", ["$scope", function($scope){
    
    $scope.Selected = "Kevin Murphy";
    
	$scope.Products = ["Kevin Murphy", "Phytologie", "R+Co"];
    
    $scope.ProductDetails = {
        "R+Co" : {text: "R+Co is a collective of some of the most forward-thinking, rule-bending hairstylists in the business. The line is all about crafting an experience for the senses, with bold packaging and signature fragrances, all while delivering on performance.", url: "./images/products/R+CoImage.png"},
        "Phytologie" : {text: "Phytologie is a comprehensive line that covers every haircare need from maintenance and treatment to color care and styling. Their mission is to use the most effective active ingredients to maintain a healthy scalp and sustain your hair’s natural beauty.", url: "./images/products/phytonew.png"},
        "Kevin Murphy" : {text: "Kevin Murphy is a fashion-focused product line originally created by Kevin Murphy to meet his needs as an editorial hair stylist. Murphy’s products provide performance, strength and longevity to support today’s ever-changing looks.", url: "./images/products/kevinmurphynew.png"}
    };
    
    $scope.SelectProduct = (name) => {
        $scope.Selected = name;
    }

}]);
