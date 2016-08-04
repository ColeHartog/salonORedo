angular.module("salono").controller("ServicesCtrl", ["$scope", "ServicesSvc", function($scope, ServicesSvc){
    
    $scope.Selected = "Design+Shape";
    
    $scope.Services = ["Design+Shape", "Pigment", "Remedy+Restore", "Polish", "Texture", "Indulge"];
    
	$scope.ServiceDetails = {
        "Design+Shape": ["Women's Cuts", "Men's Cuts", "Shampoo / Blowdry", "Blowdry Lesson", "Hair Extensions: All hair extension appointments require a consultation first."],
        "Pigment": ["Full Color", "Retouch Color", "Highlights", "Ombre / Sombre / Color Melt", "Balayage", "Corrective Color"],
        "Remedy+Restore" : ["Dry", "Oily", "Brittle / Fragile", "Rebellious / Curly", "Lifeless /  Dull", "Chemically Treated", "Thinning Hair", "Home Maintenance Systems Are Available"],
        "Polish": ["Special Event Hair", "Makeup Artistry", "Brow Wax", "Brow & Lash Tinting"],
        "Texture": ["Keratin Smoothing Treatment", "Relaxers", "Perms"],
        "Indulge" : ["Full Body Waxing & Sugaring", "Full Face Waxing & Sugaring", "Brow Microblading"]
    };
    
    $scope.SelectService = function(name) {
        $scope.Selected = name;
    }

}]);
