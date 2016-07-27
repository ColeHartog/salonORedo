angular.module("salono").controller("mainCtrl", ["$scope", "mainSvc", function($scope, mainSvc){

    $scope.imagesArray = [
//        "images/home_image.jpg",
        "images/D7k_160620_0287E-A2-1080.jpg", 
        "images/0122E-A2-1920.jpg", 
        "images/0831E-A1-1920.jpg"
    ];
    
    $scope.currentImage = $scope.imagesArray[0];
    
    setInterval(function(){
        if($scope.imagesArray.indexOf($scope.currentImage) !== $scope.imagesArray.length - 1){
            $scope.currentImage = $scope.imagesArray[$scope.imagesArray.indexOf($scope.currentImage)+1];
        }else{
            $scope.currentImage = $scope.imagesArray[0];
        }
        $scope.$apply();
    }, 5000);
    
}]);
