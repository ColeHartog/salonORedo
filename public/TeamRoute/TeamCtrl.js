angular.module("salono").controller("TeamCtrl", ["$scope", "TeamSvc", function($scope, TeamSvc){

	$scope.teamArray = [
        {
            name: "Ann",
            preview: "images/team/Ann.jpg",
            image: "images/team/Ann-Large.jpg",
            bio: "asdf"
        },
        {
            name: "Bethany",
            preview: "images/team/Bethany.jpg",
            image: "images/team/Bethany-Large.jpg",
            bio: "asdf"
        },
        {
            name: "Brittney",
            preview: "images/team/Brittney.jpg",
            image: "images/team/Brittney-Large.jpg",
            bio: "asdf"
        },
        {
            name: "Devery",
            preview: "images/team/Devery.jpg",
            image: "images/team/Devery-Large.jpg",
            bio: "asdf"
        },
        {
            name: "Hillary",
            preview: "images/team/Hillary.jpg",
            image: "images/team/Hillary-Large.jpg",
            bio: ""
        },
        {
            name: "Jessica",
            preview: "images/team/Jessica.jpg",
            image: "images/team/Jessica-Large.jpg",
            bio: ""
        },
        {
            name: "Kat C",
            preview: "images/team/KatC.jpg",
            image: "images/team/KatC-Large.jpg",
            bio: ""
        },
        {
            name: "Kat L",
            preview: "images/team/KatL.jpg",
            image: "images/team/KatL-Large.jpg",
            bio: ""
        },
        {
            name: "Kathryne.jpg",
            preview: "images/team/Kathryne.jpg",
            image: "images/team/Kathryne-Large.jpg",
            bio: ""
        },
        {
            name: "Kennedy",
            preview: "images/team/Kennedy.jpg",
            image: "images/team/Kennedy-Large.jpg",
            bio: ""
        },
        {
            name: "Margo",
            preview: "images/team/Margo.jpg",
            image: "images/team/Margo-Large.jpg",
            bio: ""
        },
        {
            name: "Marquee",
            preview: "images/team/Marquee.jpg",
            image: "images/team/Marquee-Large.jpg",
            bio: ""
        },
        {
            name: "Monique",
            preview: "images/team/Monique.jpg",
            image: "images/team/Monique-Large.jpg",
            bio: ""
        },
        {
            name: "Nicole",
            preview: "images/team/Nicole.jpg",
            image: "images/team/Nicole-Large.jpg",
            bio: ""
        },
        {
            name: "Olivia",
            preview: "images/team/Olivia.jpg",
            image: "images/team/Olivia-Large.jpg",
            bio: ""
        },
        {
            name: "Sarah",
            preview: "images/team/Sarah.jpg",
            image: "images/team/Sarah-Large.jpg",
            bio: ""
        },
        {
            name: "Shandra",
            preview: "images/team/Shandra.jpg",
            image: "images/team/Shandra-Large.jpg",
            bio: ""
        },
        {
            name: "Tabitha",
            preview: "images/team/Tabitha.jpg",
            image: "images/team/Tabitha-Large.jpg",
            bio: ""
        }
        
    ];

    $scope.leftPOS = 0;
    
    $scope.move = function(direction){
        if(direction === "left"){
            if($scope.leftPOS > -360){
                $scope.leftPOS -= 30;
            }
        }
        if(direction === "right"){
            if($scope.leftPOS < 0){
                $scope.leftPOS += 30;
            }
        }
    }

}]);
