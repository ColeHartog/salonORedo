angular.module("salono").controller("TeamCtrl", ["$scope", "TeamSvc", function($scope, TeamSvc){

	$scope.teamArray = [
        {
            name: "Ann",
            preview: "images/team/Ann.jpg",
            image: "images/team/Ann-Large.jpg",
            bio: "Years in the industry: I began my career in 1997. Favorite advanced training: Ruth Roach, RARE in New York City. Ruth taught me the techniques I built my unique cutting style upon. Every year I travel to a different city to take a week- long course to hone my skill set and keep me excited about my career path. Why the hair industry: My mother knows best! Shortly after graduating high school my mother drove me to Francois D. Hair Academy and signed me up for classes. Years have passed, and I still have a love for hair and my career. Every day I am excited to make people look how they feel. The best part of my career is watching a client leave the salon ready for the world. Not to mention the opportunities my career affords me, such as working New York City’s Fashion Week to be the true hair geek that I am. Three favorite things: Here I go: traveling, food, style, my dog, coloring, movies and making things that are impractical, practical. Most unlikely inspiration: Children: The creativity of a curious and independent child is the greatest thing to see and reminds me of my childhood, and that my crazy dreams are in reach."
        },
        {
            name: "Bethany",
            preview: "images/team/Bethany.jpg",
            image: "images/team/Bethany-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2002.Favorite advanced training: My favorite advanced training was the 2011 Kevin Murphy Show in Seattle, WA. Why the hair industry: The reason I chose to do hair is because I am passionate about making people feel more confident in themselves. There is nothing better than when a client walks out of the salon feeling better than when they came in. Three favorite things: I love to do color, especially blondes. Haircuts. Anything from chic long hair to the modern bob. Education. I love learning new things and keeping current. Most unlikely inspiration: I have been blessed to travel around the world. It’s always interesting to me that even though I’m on vacation, I’m constantly thinking about hair wherever I go. Whether I’m in Africa, Australia, or in Hong Kong, I’m constantly looking for new inspiration."
        },
        {
            name: "Brittney",
            preview: "images/team/Brittney.jpg",
            image: "images/team/Brittney-Large.jpg",
            bio: "Years in the industry: I began in 2006. Favorite advanced training: Great Lengths International extension course in Las Vegas and Kevin Murphy’s “The Big Show” in Seattle, so much fun! Why the hair industry: The hair industry for me represents a creative outlet, a way for me to express my artistic side.  I love how my work challenges me to grow as a person and as a professional. Three favorite things: First would be my family. They are my stability and bring me happiness everyday. Second is sunshine! When the sun is shining I am happy. I love to be outside and feel the heat on my skin. Finally, I love great food, especially seafood. I would love to live near water and have fresh fish all the time! Most unlikely inspiration: I get a lot of my inspiration from nature. I feel like no matter what season there is always something that catches my attention and brings out my imagination."
        },
        {
            name: "Devery",
            preview: "images/team/Devery.jpg",
            image: "images/team/Devery-Large.jpg",
            bio: "Years in the industry: I began my career in 2012. Favorite advanced training: Sally Rogerson, Creative Cutting Course. Why the hair industry: I was born with a passion for hair. It’s just in my blood. As a child I vividly remember going into the salon with my mother and being thrilled just to be in the environment. They say if you do what you love, you’ll never work a day in your life. I feel extremely blessed to say this is my reality. Three favorite things: Family. Friends. My dog, Music, Photography-The ability to capture moments. Most unlikely inspiration: LOVE. Although this may seem so cliche, love is the most powerful emotion we can feel. I am inspired, not only by the love people can have for each other, but also for their careers, hobbies, objects, animals, etc.. Anything can be loved. The energy behind love is not something that can be explained because we all feel it differently."
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
    };
    
    $scope.showInfo = false;
    $scope.selectedStylist = {};
    
    $scope.selectStylist = function(index){
        $scope.showInfo = true;
        $scope.selectedStylist = $scope.teamArray[index];
    }

}]);
