angular.module("salono").controller("TeamCtrl", ["$scope", "TeamSvc", function($scope, TeamSvc){

    //\n·      
    
	$scope.teamArray = [
        {
            name: "Ann",
            preview: "./images/Team/Ann.jpg",
            image: "./images/Team/Ann-Large.jpg",
            bio: "Years in the industry: I began my career in 1997. \n\nFavorite advanced training: Ruth Roach, RARE in New York City. Ruth taught me the techniques I built my unique cutting style upon. Every year I travel to a different city to take a week-long course to hone my skill set and keep me excited about my career path. \n\nWhy the hair industry: My mother knows best! Shortly after graduating high school my mother drove me to Francois D. Hair Academy and signed me up for classes. Years have passed, and I still have a love for hair and my career. Every day I am excited to make people look how they feel. The best part of my career is watching a client leave the salon ready for the world. Not to mention the opportunities my career affords me, such as working New York City’s Fashion Week to be the true hair geek that I am. \n\nThree favorite things: Here I go, traveling, food, style, my dog, coloring, movies and making things that are impractical, practical. \n\nMost unlikely inspiration: Children. The creativity of a curious and independent child is the greatest thing to see and reminds me of my childhood, and that my crazy dreams are in reach.",
            specialties: "Long-lasting Cuts & Colors, Babylights, Gray-blending, Brows"
        },
        {
            name: "Aubree",
            preview: "./images/Team/Aubree.jpg",
            image: "./images/Team/Aubree-Large.jpg",
            bio: "Salon Coordinator."
        },
        {
            name: "Bethany",
            preview: "./images/Team/Bethany.jpg",
            image: "./images/Team/Bethany-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2002. \n\nFavorite advanced training: My favorite advanced training was the 2011 Kevin Murphy Show in Seattle, WA. \n\nWhy the hair industry: The reason I chose to do hair is because I am passionate about making people feel more confident in themselves. There is nothing better than when a client walks out of the salon feeling better than when they came in. \n\nThree favorite things: \n·      I love to do color, especially blondes. \n·      Haircuts. Anything from chic long hair to the modern bob. \n·      Education. I love learning new things and keeping current. \n\nMost unlikely inspiration: I have been blessed to travel around the world. It’s always interesting to me that even though I’m on vacation, I’m constantly thinking about hair wherever I go. Whether I’m in Africa, Australia, or in Hong Kong, I’m constantly looking for new inspiration.",
            specialties: "Color, Balayage, Women's Cuts"
        },
        {
            name: "Brittney",
            preview: "./images/Team/Brittney2.jpg",
            image: "./images/Team/Brittney-Large.jpg",
            bio: "Years in the industry: I began in 2006. \n\nFavorite advanced training: Great Lengths International extension course in Las Vegas and Kevin Murphy’s “The Big Show” in Seattle. So much fun! \n\nWhy the hair industry: For me the hair industry represents a creative outlet, a way for me to express my artistic side.  I love how my work challenges me to grow as a person and as a professional. \n\nThree favorite things: \n·      First would be my family. They are my stability and bring me happiness everyday. \n·      Second is sunshine! When the sun is shining I am happy. I love to be outside and feel the heat on my skin. \n·      Finally, I love great food, especially seafood. I would love to live near water and have fresh fish all the time! \n\nMost unlikely inspiration: I get a lot of my inspiration from nature. I feel like no matter what season, there is always something that catches my attention and brings out my imagination.",
            specialties: "Great Lengths Extensions, Colorist, Balayage, Men's Cuts"
        },
        {
            name: "Devery",
            preview: "./images/Team/Devery.jpg",
            image: "./images/Team/Devery-Large.jpg",
            bio: "Years in the industry: I began my career in 2012. \n\nFavorite advanced training: Sally Rogerson, Creative Cutting Course. \n\nWhy the hair industry: I was born with a passion for hair. It’s just in my blood. As a child I vividly remember going into the salon with my mother and being thrilled just to be in that environment. They say if you do what you love, you’ll never work a day in your life. I feel extremely blessed to say this is my reality. \n\nThree favorite things: \n·      Family. Friends. My dog. \n·      Music. \n·      Photography-The ability to capture moments. \n\nMost unlikely inspiration: LOVE. Although this may seem so cliche, love is the most powerful emotion we can feel. I am inspired, not only by the love people can have for each other, but also for their careers, hobbies, objects, animals, etc.. Anything can be loved. The energy behind love is not something that can be explained because, we all feel it differently.",
            specialties: "Hair Talk Extensions, Blondes, Balayage"
        },
        {
            name: "Falecia",
            preview: "./images/Team/Falecia.png",
            image: "./images/Team/Falecia-Large.png",
            bio: "Years in the industry: I’ve been in the hair industry since 1994, and founded Salon O in 2005. \n\nFavorite advanced training: Ruth Roach at the RARE Academy in New York. I was excited to take a class from my hair hero, a platform artist that I had admired for years. She taught me to be bold and unafraid in creating a shape.\n\nWhy the hair industry: It was the energy. I started my career as a salon consultant, and I absolutely loved how walking into a positive, creative,  and fashion forward salon made me feel.\n\nThree favorite things:\n·      Music.\n·      People.\n·      Food.\n\nMost unlikely inspiration: Geometry. Math made me a better stylist. Haircuts are all about shape and dimension. I LOVE hair color, and to be a great colorist you have to know your color theory and formulate correctly. I’m a closet geek disguised as a stylist."
        },
        {
            name: "Hillary",
            preview: "./images/Team/Hillary.jpg",
            image: "./images/Team/Hillary-Large.jpg",
            bio: "Salon Coordinator."
        },
        {
            name: "Isabelle",
            preview: "./images/Team/Isabelle2.jpg",
            image: "./images/Team/Isabelle-Large2.jpg",
            bio: "Bio coming soon...",
            specialties: "Lash lifts and lash extensions"
        },
        {
            name: "Jessica",
            preview: "./images/Team/Jessica.jpg",
            image: "./images/Team/Jessica-Large.jpg",
            bio: "Years in the industry: I began my career in 2009 as an assistant at Juan Juan Salon in Beverly Hills, after which I advanced into the Color Specialist position. \n\nFavorite advanced training: I was given the opportunity to assist some of Los Angeles’ top stylists and makeup artists during LA Fashion Week. \n\nWhy the hair industry: I’ve always loved making others feel good about themselves, but I also wanted an outlet to express my love for beauty. They go hand in hand. \n\nThree favorite things: \n·      My iPhone. \n·      My family. \n·      Hair color. \n\nMost unlikely inspiration: Lucille Ball. I’ve loved her ever since I was a kid, in turn I sacrificed many of my Barbie’s trying to dye their hair red with Kool-Aid.",
            specialties: "Color"
        },
        {
            name: "Kat",
            preview: "./images/Team/KatC.jpg",
            image: "./images/Team/KatC-Large.jpg",
            bio: "Years in the industry: I began in the hair industry in 1994. \n\nFavorite advanced training: Vidal Sassoon Precision Cutting Classes. The precision cutting techniques I acquired are the foundation for any cut, structured or not. \n\nWhy the hair industry: Because you have the freedom to be creative. \n\nThree favorite things: \n·      Dinner parties. \n·      Friends. \n·      Being active. \n\nMost unlikely inspiration: My grandmother.",
            specialties: "Classic Cuts & Colors, Short Cuts"
        },
        {
            name: "Katie",
            preview: "./images/Team/Katie.jpg",
            image: "./images/Team/Katie-Large.jpg",
            bio: "Years in the industry: I started my hair career in 2012.\n\nFavorite advanced training: My favorite advanced training was an editorial class from Chris Baran.  He showed us the behind the scenes of fashion week and avant-garde photo shoots.  We learned how to make wigs and hair pieces and also how to apply them by crocheting them into the hair or utilizing chicken wire to create the shape you wanted.  It’s not so glitz and glam after all!\n\nWhy the hair industry: I always wanted to be in the beauty industry from a very young age.  I would always beg my parents to buy me hair and makeup products from the grocery store (this started at about age 3) and they never understood why I wanted lipstick instead of a toy sometimes.  I love the fashion forward trends and the open mindedness of the community and how everyone is so welcoming.\n\nThree favorite things:\n·      Cats (followed by a Benadryl since I’m allergic).\n·      Strong coffee.\n·      Velvet.\n\nMost unlikely inspiration: Comedy.  Particularly stand up.  I love how someone can create content that is specifically meant to make people laugh and bring people together.  It’s a true talent to be able to create a laughable outcome out of a not so pleasant situation.  Being able to laugh about not only happy/hilarious things but also sad things uplifts the spirit and creates positivity as well as creativity.",
            specialties: "Color, Blandes, Balayages"
        },
        /*{
            name: "Kat L",
            preview: "./images/Team/KatL.jpg",
            image: "./images/Team/KatL-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2002. \n\nFavorite advanced training: While I have loved every opportunity I’ve had for continuing education, the most valuable education experience has been my Vidal Sassoon class. It changed my entire view on haircuts. Foundationally, my cuts have become cleaner and more precise. Classic haircuts are the most difficult to achieve, and Vidal equipped me with the tools to better shape and mold my client’s cuts. \n\nWhy the hair industry: Initially I chose to join the industry, because I was curious about how I could keep my hair healthy, while still being creative. I realized I was drawn to the science behind it. I love knowing what is occurring when our hair changes, chemically or naturally, as well as knowing what products are the best based on ingredients and lifestyle. This industry is constantly changing and so are products and techniques, which keeps me excited and motivated to be at my best. \n\nThree favorite things:\n·      Recreational Activities: hiking, biking and camping.\n·      Good food, friends and whiskey.\n·      Educating myself, both in a traditional and non-traditional manner.\n\nMost unlikely inspiration: Things that inspire me to be creative and innovative come from different places, but one of my favorite inspirations is nature. Watching and experiencing a season helps me view things differently. The color and shapes that I see from my environment help me to think beyond the current trends. I love that no two things in nature are the same.",
            specialties: "Classic Styling, Contemporary Cuts, Short Cuts, Natural Color, Event Styling"
        },*/
        /*{
            name: "Kathryne",
            preview: "./images/Team/Kathryne.jpg",
            image: "./images/Team/Kathryne-Large.jpg",
            bio: "How many years in the industry: Since 2000.\n\nFavorite advanced training: My sugaring certification by far. Having that skill under my belt has provided me with a valuable niche in the industry.\n\nWhy the esthetics industry: Umm, initially it began as a backup plan for my future career as a struggling artist. Turns out I’m much better at esthetics than I am at painting or struggling.\n\nThree favorite things:\n·      A freshly made bed (a true rarity in my house).\n·      Snack foods possessing equal parts salty, sweet, crunchy, chewy.\n·      Spending time with my husband and little boys… of course!\n\nMost unlikely inspiration: Any song that I can’t help listening to continuously until it permanently infiltrates my brain. The song is ever changing.",
            specialties: "Microblading, Sugaring, Waxing, Brows"
        },*/
        /*{
            name: "Kennedy",
            preview: "./images/Team/Kennedy.jpg",
            image: "./images/Team/Kennedy-Large.jpg",
            bio: "Years in the industry: I began my career in 2006 as an apprentice under Ann Stolworthy. Now a stylist, Salon O has helped cultivate me as a stylist and makeup artist.\n\nFavorite advanced training: Our team’s trip to Seattle for the Kevin Murphy Show. The classes focused on editorial work and current looks, which were both initial attractors for me to this industry.\n\nWhy the hair industry: I’m that girl who cut her own hair, her Barbie’s hair and over time this evolved into doing hair and makeup for every event possible. Looking back, I was always meant to be here.\n\nThree favorite things:\n·      Vintage shopping: I love the hunt for something that has been overlooked and under-loved.\n·      Cooking: Especially with friends and family. Good food always brings people together.\n·      Reading: I love how a great book can consume you.\n\nMost unlikely inspiration: Halloween: For me it’s about creating a character. I love the process of using hair, makeup and costumes in new ways, ways you never imagined.",
            specialties: "Color, Event Styling, Makeup Artistry, Brows"
        },*/
        {
            name: "Margo",
            preview: "./images/Team/Margo.jpg",
            image: "./images/Team/Margo-Large.jpg",
            bio: "Years in the industry: I began my career in 2007 as an apprentice at Yosh For Hair/Gina Khan Salon in San Francisco, CA. While there, I specialized in cutting and advanced to the position of Artistic Director.\n\nFavorite advanced training: My most valuable training has come from my extremely talented mentors. I am very fortunate to have been trained by some of the most respected names in the industry. I also love working backstage at shows, such as Intercoiffure Fall Atelier Show in New York City, because of the fast-paced, fiercely energetic environment.\n\nWhy the hair industry: It started with a desire to create beautiful hair, but what I love most about the industry is the connections it brings. Some of my favorite relationships are ones that were created through the industry. People who started out as mentors, co-workers and clients, are some of my best friends.\n\nThree favorite things: \n·      My family. \n·      Laughing untill you get the giggles. \n·      Warm sheets fresh out of the dryer.\n\nMost unlikely inspiration: I love to travel and am always intrigued by the subtle differences in how culture influence fashion and style. Also, 80′s hair bands.",
            specialties: "Cutting, Design & Shape Specialist"
        },
        /*{
            name: "Marquee",
            preview: "./images/Team/Marquee.jpg",
            image: "./images/Team/Marquee-Large.jpg",
            bio: "Marquee is a recent graduate of the University of Utah where she majored in Communications with an emphasis in Broadcast Journalism. Aside from her position as a Front Desk Coordinator at Salon O, she is also an Assistant Sports Producer for a local television station. Outside of her career interests, she enjoys film and the outdoors."
        },*/
        {
            name: "Monique",
            preview: "./images/Team/Monique.jpg",
            image: "./images/Team/Monique-Large.jpg",
            bio: "Years in the industry: Since 1998.\n\nFavorite advanced training: I assisted Master Stylist, Victor Manno, for two years at The Elizabeth Arden Salon in Pittsburgh, Pennsylvania.\n\nWhy the hair industry: I wanted a career I could have fun with and it turned out… I was a natural!\n\nThree favorite things: \n·      My family. \n·      Friends. \n·      Summer.\n\nMost unlikely inspiration: Victor Manno. A truly intelligent man, he was my mentor. I learned so much from Victor. Every time I am working on a client I want to make Vic proud.",
            specialties: "Texture Specialist, Classic Cuts & Colors, Re-texturizers, Men's Cuts, Blowouts"
        },
        {
            name: "Nicole",
            preview: "./images/Team/Nicole.jpg",
            image: "./images/Team/Nicole-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2008.\n\nFavorite advanced training: Cirque de Soleil Wig Styling Class in Las Vegas. It was so much fun and and so different from anything else I had attended.\n\nWhy the hair industry: Growing up my grandpa owned a hair salon. I always admired the way he worked, the pride he took in his craft and how he was able to take care of his family. I wanted that for myself. I also wanted to learn how he gave my Korean grandma the perfect, platinum, mean beehive.\n\nThree favorite things:\n·      Family (including friends and dogs).\n·      Whiskey.\n·      Collecting Records.\n\nMost unlikely inspiration: My biggest inspiration is my coworkers. I know it’s not “unlikely,” but it’s very true. It’s incredibly inspiring to watch them work. There is a wealth of knowledge at Salon O, and I am lucky to be surrounded by such talent and passion for their craft.",
            specialties: "Color, Balayage, Red & Copper Color, Blowouts"
        },
        /*{
            name: "Olivia",
            preview: "./images/Team/Olivia.jpg",
            image: "./images/Team/Olivia-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2009.\n\nFavorite advanced training: Trifecta 2015. I was able to travel to Seattle to join fellow stylists for a weekend of inspiration, education and fun.\n\nWhy the hair industry: I had excelled in math and science in high school, and when I graduated I felt overwhelmed with the opportunities and options in front of me. Originally, I chose to join the industry as a way to help support myself as I ventured through college. I was not the typical stylist who had interest at a very young age. It actually took a few years of being behind the chair for me to realize that this industry was where my passion lies. It started as a means to the end, and although I plan to complete my degree, it transitioned into my new “end.”\n\nThree favorite things:\n·      Education (be it within the industry or not).\n·      Family.\n·      Food.\n\nMost unlikely inspiration: Chemistry and an unhealthy love for Calculus. I studied Analytical Chemistry and Organic Chemistry in college and have found parallels between these areas and the art of hair. The chemical makeup of haircare products/color and the logistics of how and why they work fascinate me. It is a goal of mine to continue to gain a greater understanding of the science behind hair well enough to develop my own line."
        },*/
        {
            name: "Renae",
            preview: "./images/Team/Renae.jpg",
            image: "./images/Team/Renae-Large.jpg",
            bio: "Years in the industry: I started my my hair journey in 2012.\n\nFavorite advanced training: Assisting other stylists has been my favorite thus far. Having been lucky enough to have had the opportunity to assist for stylists in Utah and California I observed different artistic approaches to each hair service requested. This taught me to be open and think outside of the box.\n\nWhy the hair industry: I’ve always been an artist and I’ve always loved interacting and learning from people with a different perspective than mine. Being a hair stylist provides me the opportunity to participate in both of those worlds.\n\nThree favorite things:\n·      Family.\n·      Coffee.\n·      The beach.\n\nMost unlikely inspiration: I often find myself driving around taking in the colors and shapes around me. A building, a park, cars… whatever it is I am intrigued how they all play together visually."
        },
        {
            name: "Sarah A",
            preview: "./images/Team/Sarah.jpg",
            image: "./images/Team/Sarah-Large.jpg",
            bio: "Bio coming soon",
            specialties: "Classic & Precise Shapes, Balayage, Dry Cuts, Bobs, Long Lengths"
        },
        {
            name: "Sarah B",
            preview: "./images/Team/Sarah-B.jpg",
            image: "./images/Team/Sarah-B-Large.jpg",
            bio: "Years in the industry: I began my stylist career as an apprentice in 2014.\n\nFavorite advanced training: The business of balayage. I love hair painting and this course fine-tuned my techniques that I use everyday to create flawless transition of color dimension. \n\nWhy the hair industry:  I am a very creative and visual individual. I love expressing my creativity through hair and witnessing how that makes my clients feel beautiful is a privilege.\n\nThree favorite things:\n·      Outdoor recreation.\n·      Experiencing new adventures: whether it be food, people, travel, or a new outdoor activity.\n·      Friends and family.\n\nMost unlikely inspiration: Music - there are so many different genres that constantly surround and inspire me."
        },
        {
            name: "Shandra",
            preview: "./images/Team/Shandra.jpg",
            image: "./images/Team/Shandra-Large.jpg",
            bio: "Years in the industry: I’ve been in the industry since 2001.\n\nFavorite advanced training: I was lucky to be the salon owner that hosted the northwest launch of LabelM. This opportunity allowed me the privilege of participating on stage with top London stylists from both LabelM and Wella.\n\nWhy the hair industry: I chose the hair industry to let my creativity flow and create a positive outcome of self-confidence and beauty for both my guest, as well as for myself.\n\nThree favorite things:\n·      Musical theater.\n·      Literature.\n·      People watching.\n\nMost unlikely inspiration: My unlikely inspiration is the result of an argument that I have with myself about breaking out of my shell and letting others into my world. There is so much out there to be taken advantage of, and when you do, there are generally beautiful things to be had.",
            specialties: "Color, Vivid & Pastel Color, Balayage, Contemporary Cuts"
        },
        {
            name: "Tabitha",
            preview: "./images/Team/Tabitha.jpg",
            image: "./images/Team/Tabitha-Large.jpg",
            bio: "Years in the industry: I began my career in 2007.\n\nFavorite advanced training: The best part of my career is the constant training and education I receive from fellow stylists. I am inspired everyday I go to work, and that’s unbeatable advanced training.\n\nWhy the hair industry: In my early teenage years I would watch my mom get her hair done, and I would practice what I learned on friends. I went from an informal stylist to officially graduating from the top beauty school, Euphoria Institute in Las Vegas on the luckiest days of all, 07/07/07. Jackpot!!!\n\nThree favorite things:\n·      Family.\n·      Mountains.\n·      Music.\n\nMost unlikely inspiration: Architecture. I briefly studied architecture at UNLV, and the knowledge of geometry, color scheme and overall building design still inspires me.",
            specialties: "Free-Form Artistry, Naturally-Enhanced Color, Hair Talk Extensions, Style Transformations"
        },
        {
            name: "Tonni",
            preview: "./images/Team/Tonni.jpg",
            image: "./images/Team/Tonni-Large.jpg",
            bio: "Years in the industry: I have been in the industry since 2005.\n\nFavorite advanced training: Becoming a Certified Redken Color Artist. I Wanted to understand the theory of color like the back of my hand, memorize principles, learn the chemistry behind it all and become a mad scientist!\n\nWhy the hair industry: I have always been drawn to hair. Shapes, sizes, angles, measurements and what they can accentuate. Imagine color bringing all of those shapes and designs to life! It’s incredible seeing what that can do to a persons look and to a persons confidence level.\n\nThree favorite things:\n·      Drumming.\n·      Riding Motorcycles.\n·      Art.\n·      and for bonus points, the greatest thing of all... DOGS!\n\nMost unlikely inspiration: Watching someone put all their effort and trust into something not fearing what is on the other side. When I see someone working hard I want to do the same, it must be an energy thing, people are contagious.",
            //specialties: "Alpha, Beta, Delta"
        }
        
    ];
//   FILES NEED TO BE .jpeg (lower case)
    $scope.leftPOS = 0;
    
    $scope.move = function(direction){
        if(direction === "left"){
            if($scope.leftPOS >= -300){
                $scope.leftPOS -= 104;
            }
            else if($scope.leftPOS < -300){
                $scope.leftPOS = -416;
            }
            // 312 base + 26 for each additional tile
//            else if($scope.leftPOS < -300){
//                $scope.leftPOS = -338;
//            }
        }
        if(direction === "right"){
//            if($scope.leftPOS === -338) {
//                $scope.leftPOS = -312;
//            }
            if($scope.leftPOS === -416) {
                $scope.leftPOS = -312;
            }else{
                if($scope.leftPOS < 0){
                    $scope.leftPOS += 104;
                }
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
