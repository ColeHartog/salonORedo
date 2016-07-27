angular.module("salono").controller("ProductsCtrl", ["$scope", function($scope){
    
    $scope.Selected = "Kevin Murphy";
    
	$scope.Products = ["Kevin Murphy", "Phytologie", "R+Co"];
    
    $scope.ProductDetails = {
        "R+Co" : {text: "Lorem ipsum dolor sit amet, eu posuere elementum, quis ornare. Integer lorem. Pede egestas turpis ut, est eget, ligula suscipit fringilla lorem blandit maecenas, vestibulum in dignissim dictumst, amet fermentum enim.", url: "./images/products/R+CoImage.png"},
        "Phytologie" : {text: "Phytologie is a comprehensive line that covers every haircare need from maintenance and treatment to color care and styling. Their mission is to use the most effective active ingredients to maintain a healthy scalp and sustain your hair’s natural beauty.", url: "./images/products/phytonew.png"},
        "Kevin Murphy" : {text: "Kevin Murphy is a fashion-focused product line originally created by Kevin Murphy to meet his needs as an editorial hair stylist. Murphy’s products provide performance, strength and longevity to support today’s ever-changing looks.", url: "./images/products/kevinmurphynew.png"}
    };
    
    $scope.SelectProduct = (name) => {
        $scope.Selected = name;
    }

}]);
