angular.module("salono").controller("ServicesCtrl", ["$scope", "ServicesSvc", function($scope, ServicesSvc){
    
    $scope.Selected = "Design+Shape";
    
    $scope.Services = ["Design+Shape", "Pigment", "Remedy+Restore", "Polish", "Texture", "Indulge"];
    
	$scope.ServiceDetails = {
        "Design+Shape": ["Women's Cuts", "Men's Cuts", "Shampoo | Blowdry", "Blowdry Lesson", "Hair Extensions: Requires a consultation"],
        "Pigment": ["Full Color", "Retouch Color", "Highlights", "Balayage | Color Melt", "Color Correction: Requires a consultation"],
        "Remedy+Restore" : ["Dry", "Oily", "Brittle | Fragile", "Rebellious | Curly", "Lifeless |  Dull", "Chemically Treated", "Thinning Hair", "Home Maintenance Systems Are Available"],
        "Polish": ["Special Event Hair", "Makeup Artistry", "Brow Wax", "Brow & Lash Tinting"],
        "Texture": ["Keratin Smoothing Treatment: Requires a consultation", "Relaxers", "Perms"],
        "Indulge" : ["Lash Lift", "Lash Extensions", "Lash Tint | Brow Tint"]
    };
    
    $scope.SelectService = function(name) {
        $scope.Selected = name;
    }

}]);
