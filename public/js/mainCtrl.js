angular.module("salono").controller("mainCtrl", ["$scope", "mainSvc", function($scope, mainSvc){
    
    $scope.imagesArray = [
        "./images/0296E%20A4%201920.jpg",
        "./images/2236E%20A3%201920.jpg",
        "./images/1323E%20A3%201920.jpg",
        "./images/0346E%20A1%201920.jpg",
        "./images/0453E%20A2%201920Flip.jpg",
        "./images/0421E%20A1%201920.jpg",
        "./images/0445E%20A2w%201920.jpg",
        "./images/0732E%20A2%201920.jpg"
    ];
    
    var index = 2;
    $scope.currentImage = $scope.imagesArray[index-1];
    
    setInterval(function(){
        if(index % 2 === 0){
            document.getElementById("copycat").style.backgroundImage = "url("+$scope.imagesArray[index-1]+")";
//            console.log("change");
            setTimeout(function(){
                document.getElementById("copycat").style.opacity = 1;
//                console.log('update');
            }, 4000);
        }else{
            document.getElementById("maincat").style.backgroundImage = "url("+$scope.imagesArray[index-1]+")";
            setTimeout(function(){
                 document.getElementById("copycat").style.opacity = 0;
            }, 4000);
        }
        if(index === 8){
            index = 1;
        }else{
            index++;
        }
    }, 5000);
    
    $scope.showSideBar = false;
    
}]);
