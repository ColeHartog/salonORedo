angular.module("salono").controller("TeamCtrl", ["$scope", "TeamSvc", function($scope, TeamSvc){

    //\n·      
    
	$scope.teamArray = [
        {
            name: "Brittney",
            image: "./images/Team/BrittneyNew.jpg",
            bio: "Years or level of experience as a stylist: I am the Director of Salon O and a master stylist with 15 years of experience.\n\nFavorite advanced training: My Favorite Advanced training I attended was a one on one cutting coarse with Slate Hair Education in London, England. Being able to completely focus and refine my cutting skills with a master in haircutting was such great learning experience for me.\n\nWhy did you choose the hair industry: I continue to choose the hair industry because it truly is a deep passion for me. I love so many things about what I do but my number one would be the people. The people I’m surrounded with everyday bring me so much joy and fill my cup beyond measure.\n\nThree favorite things: \n- Traveling, especially with my husband. \n- Thrifting, with my cute daughters.\n- Animals, my 3 dogs are like my kids.",
            specialties: "Extensions, specifically Great Lengths Keratin Bonds. Loves Blondes and Color."
        },
        {
            name: "Sarah",
            image: "./images/Team/SarahNew.jpg",
            bio: "Years or level of experience as a stylist: I’m a Master Stylist with over 20 years of experience.\n\nFavorite advanced training: My absolute favorite training has been the courses I’ve taken at Vidal Sassoon in Santa Monica. Sassoon emphasizes the fundamentals of cutting hair giving the stylist the freedom to create and master any haircut!\n\nWhy did you choose the hair industry: I continue to choose the hair industry because I value and respect the art of what we do behind the chair and relationships we form with our clients. It’s a bond unlike any other.\n\nThree favorite things: \n- Cheeseburgers in all shapes and sizes\n- Reading a new book\n- Nights with my family",
            specialties: "My specialty is hair cutting and natural color services"
        },
        {
            name: "Jessica",
            image: "./images/Team/JessicaNew.jpg",
            bio: "Years or level of experience as a stylist: I’m a Master stylist with 14 years of experience.\n\nFavorite advanced training: My most recent training in haircutting with Shannel Mariano. I loved that it was more about thinking about haircutting outside of the box.\n\nWhy did you choose the hair industry: I love to create, and I love people. The feeling I get when someone walks out emotionally and physically lifted, it is the best feeling ever!\n\nThree favorite things: \n\nThree favorite things: \n-Spending time with my family \n-Summer time in the pool\n-Online shopping, or as my kids like to call it \“present delivery\"",
            specialties: "Anything color, especially natural lived-in color and fun reds!"
        },
        {
            name: "Michaela",
            image: "./images/Team/MichaelaNew.jpeg",
            bio: "Years or level of experience as a stylist: I am a Master level stylist.\n\nFavorite advanced training: My favorite advanced training was the American Board of Hair Colorist. It was a three-day intensive convention on hair color, placement, and the science that goes into it.\n\nWhy did you choose the hair industry: It’s such a creative platform. Not only are you able to express what you perceive as art on someone’s hair, you are able to build relationships and connect with so many different people. Watching my clients leave with more self-esteem is priceless.\n\nThree favorite things: \n- Hiking\n- Traveling\n- My dog, Layla!",
            specialties: "Balayage, Lived-in hair color, Highlights, Long haircuts."
        },
        // {
        //     name: "Louisa",
        //     image: "./images/Team/LouisaNew.jpg",
        //     bio: "Years or level of experience as a stylist: I am a Junior Stylist\n\nFavorite advanced training: My favorite advanced training was an in-depth cutting class with Shannel Mariano. She uses a visual method of teaching that encouraged me to think outside the box. I also loved my Laced Extension training with the owner herself, Lacy.\n\nWhy did you choose the hair industry: I chose the hair industry because I love art and being creative. I’m also very social person and wanted a career that would fulfill both of those needs.\n\nThree favorite things: \n- Travel\n- Art\n- Animals",
        //     specialties: "Blonding and Extension services."
        // },
        {
            name: "Anthony",
            image: "./images/Team/AnthonyNew.jpg",
            bio: "Years or level of experience as a stylist: I began my career at Salon O as an assistant & worked my way up to Senior Stylist in a short 6 years.\n\nFavorite advanced training: My favorite advanced training was Vidal Sassoon in Santa Monica. Sassoon teaches the intricate and fundamental details of cutting hair. It helped me connect the dots in haircutting and advanced my skill set.\n\nWhy did you choose the hair industry: I knew from age 6 that I wanted a career in the beauty industry. I’ve always loved making people feel their best.\n\nThree favorite things: \n- Animals, especially dogs\n- Great food\n- The beach",
            specialties: "In all things Blonde. I love a great haircut too!"
        },
        {
            name: "Kathryne",
            image: "./images/Team/KathryneNew.jpg",
            bio: "Years or level of experience: I’ve been an aesthetician/sugaring specialist for 23 years and a cosmetic tattoo artist for nearly 8 years.\n\nFavorite advanced training: It’s hard to pinpoint one advanced training because my career has taken so many directions over the years, which means I’m in a perpetual state of advanced education! I recently completed a Nano Brow Course (Machine Hair Strokes) with Olya Van Patten of Utah Microblading. She is an absolute master of her craft and a generous mentor and educator. Learning a new skill set this far into my career is challenging, but so exciting.\n\nWhy did you choose the hair industry: My entrance into the industry began as a back-up plan for a young struggling art school dropout. I thought I’d do it for a short time while I figured out what I REALLY wanted to do. When I woke up to the fact that this IS what I want to do everything changed for me. This industry has given me the freedom to constantly evolve as an artist, technician, and a human. I’m the forever student. My true passion, beyond the craft is human connection!\n\nThree favorite things: \n-Alone time with a podcast\n- Vacations with my family\n- Nights spent curled up on the couch watching “animal fail” videos with my boys and my sweet goldendoodle.",
            specialties: "Microblading, Nano Brow, Ombre brow, and Sugaring."
        },
        {
            name: "Shandra",
            image: "./images/Team/ShandraNew.jpg",
            bio: "Years or level of experience as a stylist: Master Stylist 20 years of experience\n\nFavorite advanced training: My two favorites have been the Bumble and Bumble training, mastery of design for razor cutting and Laced Academy extension training: working with natural beaded rows, tape ins, and the interlaced method of extensions.\n\nWhy did you choose the hair industry: I like to connect to people. I also like the use of artistic form on a space that can always be different. A world that I can cultivate and create. Hair and those I get to share it with have been my inspiration. I simply just have joy when in hair.\n\nThree favorite things: \n- Hair. Truly I can be creative and also regimented. But I am obsessed over my art and am so lucky to have found my career in the industry.\n- Music and Theatre, and musical theatre. They make me, me.\n- Family, Friends, and cats. They all surround me with the love I hope to return in kind.",
            specialties: "Shag / editorial cutting, fashion color focused design / color specialist. Textures cutting, pixies, mullet, shag"
        },
        {
            name: "Bethany",
            image: "./images/Team/BethanyNew.jpg",
            bio: "Years or level of experience as a stylist: Master Stylist with 20 years of experience.\n\nFavorite advanced training: Natural Beaded Rows Advanced Academy. This yearlong academy has not only taught me an amazing method of extensions but has pushed me harder to be a better stylist and better human with classes in color, cutting, business, and self-development.\n\nWhy did you choose the hair industry: I’ve wanted to do hair since high school. But, what has kept me doing ahir for nearly 2 decades, is the people that I’ve surrounded myself with and my beautiful guests that sit in my chair.\n\nThree favorite things: \n- Spending time with my husband and kiddos \n- Skincare \n- Travel",
            specialties: "Dimensional Color and NBR Hair Extensions"
        },
        {
            name: "Shannon",
            image: "./images/Team/ShannonNew.jpg",
            bio: "Years or level of experience as a stylist: Senior Stylist with 7 years experience.\n\nFavorite advanced training: My favorite advanced training was my L’Oréal Professional Color certification. This is where I learned the most about customizing color and sectioning for maximum impact.\n\nWhy did you choose the hair industry: Honestly, at first, I chose the hair industry because I didn’t know what else to do. I thought, “I’ll just do this for now.” But I fell in love with creating art on hair & an industry that pushes me to be better every day. I fell in love with watching my guest’s face light up once they saw their hair finished. I get to show women every single day how beautiful they are. Doing hair is honestly so fun and so rewarding to me. I love what I do. I’m constantly surrounded by the most inspiring and positive people I’ve ever met. Working in this industry has changed my life. Its more than just hair & I’ll continue to choose it every day.\n\nThree favorite things: \n- My Job \n- Hiking & weight lifting \n- Trying new food!",
            specialties: "Highlights and Balayage"
        },
        {
            name: "Melissa",
            image: "./images/Team/MelissaNew.jpg",
            bio: "Years or level of experience as a stylist: I’m a Master Stylist with 17 years of experience behind the chair.\n\nFavorite advanced training: I’ve attended the Phantour with Maggiemh and Bescene on two occasions. It’s by far the training that has elevated my career and skill set the most. The knowledge acquired, not just about techniques, but color theory has been life changing.\n\nWhy did you choose the hair industry: I chose the beauty industry because it didn’t feel like I was getting anywhere attending college and I wanted to establish a skill set that would allow me to earn money while I figured out what I wanted to do with my life. But I quickly discovered hairdressing was my passion and exactly where I wanted to build a career.\n\nThree favorite things: \n- Dogs, primarily my two little fur babies. \n- Traveling \n- Food!",
            specialties: "Blondes, haircutting, and IBE Extension Certified."
        },
        {
            name: "Kat",
            image: "./images/Team/KatNew.jpeg",
            bio: "Years or level of experience as a stylist: Master Stylist with 20+ years experience\n\nFavorite advanced training: My favorite advanced training was with Vidal Sassoon. By learning true fundamentals and precision you are given the freedom to create.\n\nWhy did you choose the hair industry: I chose the hair industry because you have the freedom to be creative.\n\nThree favorite things: \n- Family \n- Friends \n- Vacation",
            specialties: "Short haircuts, dimensional color."
        },
        {
            name: "Monique",
            image: "./images/Team/MoniqueNew.jpg",
            bio: "Years or level of experience as a stylist: Master Stylist with 25 years experience\n\nFavorite advanced training: My favorite advanced training was a cutting class by Robert Cromeans. He was so much fun to watch and he made me want to immediately start cutting and coloring hair.\n\nWhy did you choose the hair industry: I chose the hair industry because I love making people feel good about themselves. It is both hard work and a creative outlet.\n\nThree favorite things: \n- My Family \n- Music \n- Good Food",
            specialties: "Curly hair, Cutting and the best Hype Woman."
        },
        {
            name: "Tonni",
            image: "./images/Team/TonniNew.jpg",
            bio: "Years or level of experience as a stylist: Master Stylist with 16 years of experience.\n\nFavorite advanced training: It’s hard to choose just one! The three day Allilon cutting course in Vancouver,B.C. has been a game changer behind the chair. Becoming a certified Global Color Artist. I loved learning about the science behind color. It makes me feel like a mad Chemist! Lastly, spending five days in London at the Vidal Sassoon Academy. If you can perfect the principles they teach, you can create and customize anything and EVERYTHING!\n\nWhy did you choose the hair industry: I have always been drawn to hair. Shapes, sizes, angles, measurements and what they can accentuate. Imagine adding color bringing all of those shapes and designs to life! It’s incredible seeing what that can do to a persons look and their confidence level.\n\nThree favorite things: \n- My Partner and our two pups \n- Drumming. I will always be a punk rock kid at heart. \n- Riding motorcycles. It can be in the mountains, in the sand or on the pavement. Just tell me when or where and I’ll meet you there,",
            specialties: "Precision cutting, It’s all about the details! Classic Shapes, long hair, short hair, pixies, and barbering. Lived-in color and Balayage."
        },
        {
            name: "Falecia",
            image: "./images/Team/FaleciaNew.jpg",
            bio: "Years in the industry: I’ve been in the hair industry since 1994, and founded Salon O in 2005. \n\nFavorite advanced training: Ruth Roach at the RARE Academy in New York. I was excited to take a class from my hair hero, a platform artist that I had admired for years. She taught me to be bold and unafraid in creating a shape.\n\nWhy the hair industry: It was the energy. I started my career as a salon consultant, and I absolutely loved how walking into a positive, creative,  and fashion forward salon made me feel.\n\nThree favorite things:\n- Music.\n- People.\n- Food.\n\nMost unlikely inspiration: Geometry. Math made me a better stylist. Haircuts are all about shape and dimension. I LOVE hair color, and to be a great colorist you have to know your color theory and formulate correctly. I’m a closet geek disguised as a stylist."
        },
        {
            name: "Liz",
            image: "./images/Team/LizNew.jpg",
            bio: "Years in the industry: I've been doing hair since 2005.\n\nFavorite advanced training: I've had advanced training all over the world from many different companies and people, learning the most from training under my personal hair hero Tony Shiraki.\n\nWhy the hair industry: I love one on one connection and helping people feel comfortable in their own skin. Hair is also an expression of art to me, I love silhouettes, lines, and the tactile sensation.\n\nThree favorite things: \n- Sunshine. \n- Music. \n- Stand-up Comedy.\n\nMost unlikely inspiration: Mr. Rogers and Bob Ross. I think most situations and things could be made better by asking \"What would Mr. Rogers/Bob Ross do?\"",
            specialties: "Haircuts of all lengths and textures"
        },
        {
            name: "Margo",
            image: "./images/Team/MargoNew.jpg",
            bio: "Years in the industry: I began my career in 2007 as an apprentice at Yosh For Hair/Gina Khan Salon in San Francisco, CA. While there, I specialized in cutting and advanced to the position of Artistic Director.\n\nFavorite advanced training: My most valuable training has come from my extremely talented mentors. I am very fortunate to have been trained by some of the most respected names in the industry. I also love working backstage at shows, such as Intercoiffure Fall Atelier Show in New York City, because of the fast-paced, fiercely energetic environment.\n\nWhy the hair industry: It started with a desire to create beautiful hair, but what I love most about the industry is the connections it brings. Some of my favorite relationships are ones that were created through the industry. People who started out as mentors, co-workers and clients, are some of my best friends.\n\nThree favorite things: \n- My family. \n- Laughing untill you get the giggles. \n- Warm sheets fresh out of the dryer.\n\nMost unlikely inspiration: I love to travel and am always intrigued by the subtle differences in how culture influence fashion and style. Also, 80′s hair bands.",
            specialties: "Cutting, Design & Shape Specialist"
        },
        // {
        //     name: "Katie",
        //     image: "./images/Team/Katie-Large.jpg",
        //     bio: "Years in the industry: I started my hair career in 2012.\n\nFavorite advanced training: My favorite advanced training was an editorial class from Chris Baran.  He showed us the behind the scenes of fashion week and avant-garde photo shoots.  We learned how to make wigs and hair pieces and also how to apply them by crocheting them into the hair or utilizing chicken wire to create the shape you wanted.  It’s not so glitz and glam after all!\n\nWhy the hair industry: I always wanted to be in the beauty industry from a very young age.  I would always beg my parents to buy me hair and makeup products from the grocery store (this started at about age 3) and they never understood why I wanted lipstick instead of a toy sometimes.  I love the fashion forward trends and the open mindedness of the community and how everyone is so welcoming.\n\nThree favorite things:\n- Cats (followed by a Benadryl since I’m allergic).\n- Strong coffee.\n- Velvet.\n\nMost unlikely inspiration: Comedy.  Particularly stand up.  I love how someone can create content that is specifically meant to make people laugh and bring people together.  It’s a true talent to be able to create a laughable outcome out of a not so pleasant situation.  Being able to laugh about not only happy/hilarious things but also sad things uplifts the spirit and creates positivity as well as creativity.",
        //     specialties: "Color, Blondes, Balayages"
        // },
    ].sort((a, b) => a.name >= b.name);
//   FILES NEED TO BE .jpeg||.jpg (lower case)
    $scope.leftPOS = 0;
    
    $scope.move = function(direction){
//        console.log("LeftPOS: " + $scope.leftPOS + ", Math.Floor: "  + (-104 * (Math.floor( $scope.teamArray.length / 4) -2)) + ", %: " + ($scope.teamArray.length % 4));
        if(direction == "left"){
            if($scope.leftPOS >= ((-104 * (Math.floor( $scope.teamArray.length / 4) -2))))
                $scope.leftPOS -= 104;
            else if($scope.leftPOS >= ((-104 * (Math.floor( $scope.teamArray.length / 4) -1))))
                $scope.leftPOS -= (26 * ( $scope.teamArray.length % 4 ));
            
        }else if(direction == "right"){
            if($scope.leftPOS == (-26 * ($scope.teamArray.length - 4)))
                $scope.leftPOS += (26 * ( $scope.teamArray.length % 4 ));
            else if($scope.leftPOS < 0)
                $scope.leftPOS += 104;
        }
    }
    
//    $scope.move = function(direction){
//        console.log($scope.leftPOS);
//        if(direction === "left"){
//            if($scope.leftPOS >= -400){
//                $scope.leftPOS -= 104;
//            }
////            else if($scope.leftPOS < -300){
////                $scope.leftPOS = -390;
////            }
//            // 312 base + 26 for each additional tile
////            else if($scope.leftPOS < -300){
////                $scope.leftPOS = -338;
////            }
//        }
//        if(direction === "right"){
////            if($scope.leftPOS === -338) {
////                $scope.leftPOS = -312;
////            }
//            if($scope.leftPOS === -390) {
//                $scope.leftPOS = -312;
//            }else{
//                if($scope.leftPOS < 0){
//                    $scope.leftPOS += 104;
//                }
//            }
//        }
//    };
    
    $scope.showInfo = false;
    $scope.selectedStylist = {};
    
    $scope.selectStylist = function(index){
        $scope.showInfo = true;
        $scope.selectedStylist = $scope.teamArray[index];
    }

}]);
