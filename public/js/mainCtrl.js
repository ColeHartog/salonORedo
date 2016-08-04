angular.module("salono").controller("mainCtrl", ["$scope", "mainSvc", function($scope, mainSvc){
    
    $scope.imagesArray = [
        "./images/0296E%20A4%201920.jpg",
        "./images/2236E%20A2v2%201920.jpg",
        "./images/1323E%20A3%201920.jpg",
        "./images/0346E%20A1%201920.jpg",
        "./images/0453E%20A1%201920Flip.jpg",
        "./images/0421E%20A1%201920.jpg",
        "./images/0445E%20A2w%201920.jpg",
        "./images/0732E%20A1%201920.jpg"
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
    
    $scope.showSideBar = false;
    
}]);
