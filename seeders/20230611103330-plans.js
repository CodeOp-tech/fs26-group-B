"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Plan", [
      {
        name: "Beach",
        searchKeyword: "beach",
        shortDescription:
          "Soak up the sun and enjoy a day at the beach together. Lounge on the sand, take a dip in the water, and maybe even have a beachside picnic.",
        longDescription:
          "Get ready to soak up the sun and dive into the refreshing waves as you head to the beach! Feel the warm sand between your toes, listen to the soothing sound of crashing waves, and breathe in the salty ocean air. Set up your beach chairs or lay down a colorful beach blanket to claim your spot. Take leisurely strolls along the shoreline, build sandcastles, or challenge each other to a friendly game of beach volleyball. Don't forget to pack sunscreen, beach games, snacks, and plenty of water to stay hydrated. Whether you're lounging, swimming, or simply enjoying each other's company, the beach provides the perfect backdrop for a relaxing and memorable day together.",
        imageSrc:
          "https://images.unsplash.com/photo-1495546992359-94a48035efca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Picnic",
        searchKeyword: "park",
        shortDescription:
          "Pack a delicious lunch or dinner, a cozy blanket, and head to a nearby park for a picnic. Enjoy good food, share stories, and bask in the beauty of nature.",
        longDescription:
          "You are going on a delightful picnic in the park! Imagine the warm sun on your face and the gentle breeze rustling through the trees. Pack a scrumptious assortment of sandwiches, fruits, and snacks. Don't forget to bring a cozy blanket to sit on! Find a serene spot, lay out your spread, and immerse yourself in the beautiful surroundings. Consider bringing along a Frisbee or a deck of cards for added entertainment. It's the perfect opportunity to unwind, reconnect, and enjoy quality time in nature.",
        imageSrc:
          "https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dinner",
        searchKeyword: "restaurant",
        shortDescription:
          "Treat yourselves to a delicious meal at a cozy restaurant. Enjoy each other's company over candlelight and savor the flavors of a delectable cuisine.",
        longDescription:
          "Dress up and get ready for a delightful dining experience as you head out for dinner! Explore local restaurants or try out a cuisine you've both been curious about. Indulge in a variety of tantalizing dishes, from appetizers to decadent desserts. Whether you prefer a cozy, intimate setting or a bustling atmosphere, choose a restaurant that suits your tastes. Engage in conversations, share recommendations, and savor the flavors as you embark on a culinary journey together. Let the ambiance, delicious food, and shared dining experience create a special evening of connection and enjoyment.",
        imageSrc:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cinema",
        searchKeyword: "cinema",
        shortDescription:
          "Experience the magic of the big screen by catching a movie together. Sit back, relax, and get lost in a captivating story.",
        longDescription:
          "Get your popcorn ready and settle into plush seats as you head to the cinema for a movie night! Choose a movie that you're both excited to watch, whether it's a thrilling action film, a heartwarming romance, or a hilarious comedy. Immerse yourselves in the captivating storytelling, the stunning visuals, and the immersive sound effects of the big screen. Share your thoughts and reactions during the movie or save them for a post-movie discussion. Let the magic of cinema transport you to different worlds, evoke a range of emotions, and provide a shared experience that will have you reminiscing for years to come.",
        imageSrc:
          "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Museum",
        searchKeyword: "museum",
        shortDescription:
          "Embark on a cultural adventure by visiting a local museum or gallery. Explore fascinating exhibits, discuss art, history, or science, and ignite your curiosity as you appreciate the wonders of human creativity.",
        longDescription:
          "You are about to embark on a captivating journey as you visit a local museum. Immerse yourself in the world of art, history, or science. Explore fascinating exhibits and allow your curiosity to guide you. Take your time examining intricate artwork or learning about past civilizations. Engage in insightful discussions, share your perspectives, and appreciate the beauty of human creativity and innovation. Don't forget to check the museum's schedule for any guided tours or special events to make the most of your visit.",
        imageSrc:
          "https://images.unsplash.com/photo-1512540452972-baac55d40ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Local Bar",
        searchKeyword: "bar",
        shortDescription:
          "Unwind and enjoy each other's company with drinks at a trendy bar. Sip your favorite beverages, engage in conversation, and create lasting memories.",
        longDescription:
          "Get ready to embrace the lively atmosphere and vibrant energy of a local bar! Explore the local scene and find a bar that offers your favorite drinks or a variety of craft cocktails. Sit at the bar or grab a cozy booth, and engage in conversations with the friendly staff and fellow patrons. Sip on your favorite beverages or try out unique concoctions as you toast to good times and shared moments. Enjoy the music, perhaps even show off your dance moves if the mood strikes, and let the ambiance of the bar become a backdrop for laughter, connection, and an evening of fun.",
        imageSrc:
          "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ping pong",
        searchKeyword: "ping+pong",
        shortDescription:
          "Challenge each other to a fun and energetic game of ping pong. Engage in friendly competition, laugh, and showcase your skills on the table.",
        longDescription:
          "Prepare for a thrilling and competitive game of ping pong! Find a local ping pong facility or set up a table at home or in a park. Grab paddles, a ping pong ball, and let the matches begin. Engage in friendly rivalry, test your hand-eye coordination, and enjoy the fast-paced action as you try to outsmart each other with swift shots and well-placed spins. Whether you're beginners or seasoned players, the game of ping pong provides an exhilarating opportunity to bond, laugh, and unleash your competitive spirits in a fun and lighthearted manner.",
        imageSrc:
          "https://images.unsplash.com/photo-1676827613262-5fba25cee5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bowling",
        searchKeyword: "bowling",
        shortDescription:
          "Lace up your bowling shoes and hit the lanes for a playful and entertaining outing. Bowl a strike, share laughs, and enjoy some friendly rivalry.",
        longDescription:
          "Lace up your bowling shoes and get ready for a strikingly good time at the bowling alley! Roll your bowling balls down the shiny lanes, aiming for the perfect strike or spare. Engage in friendly competition, cheer each other on, and celebrate your successes with high-fives and victory dances. Enjoy the upbeat music, the glowing neon lights, and the joyous atmosphere of the bowling alley. Take breaks between frames to indulge in classic bowling alley snacks like nachos or hotdogs. Bowling provides a fantastic opportunity to let loose, bond, and create lasting memories through the shared pursuit of strikes and spares.",
        imageSrc:
          "https://images.unsplash.com/photo-1628139483293-eea5a6b2e0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Karaoke",
        searchKeyword: "karaoke+bar",
        shortDescription:
          "Embrace your inner rock star and sing your hearts out at a karaoke night. Take turns serenading each other and have a blast with the lively atmosphere.",
        longDescription:
          "Prepare to unleash your inner rockstar as you embark on a karaoke adventure! Find a local karaoke bar or set up a karaoke machine at home. Browse through a vast selection of songs and take turns belting out your favorite tunes. Sing passionately, dance like nobody's watching, and revel in the applause and cheers from your supportive audience. Don't worry about hitting every note perfectly—karaoke is all about having fun, embracing your unique vocal talents, and creating a lively and entertaining experience together.",
        imageSrc:
          "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Concert",
        searchKeyword: "concerts",
        shortDescription:
          "Immerse yourselves in the electrifying energy of a live concert. Dance, sing along, and enjoy the thrill of a memorable musical performance",
        longDescription:
          "Get ready to immerse yourselves in the electrifying atmosphere of a live concert! Check out upcoming concerts in your area featuring artists or bands you both love. Purchase tickets and anticipate an unforgettable night filled with live music, dancing, and a euphoric crowd. Sing along to your favorite songs, sway to the rhythm, and let the energy of the concert fill you with excitement and joy. Whether it's a small intimate venue or a massive stadium, the shared experience of a concert will create memories that resonate long after the final encore.",
        imageSrc:
          "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Theatre play",
        searchKeyword: "theatre",
        shortDescription:
          "Be captivated by the world of theater and attend a live play. Marvel at the performances, delve into captivating stories, and appreciate the art of stage acting.",
        longDescription:
          "Prepare to be captivated by the magic of live theater as you attend a thrilling theatrical production! Check out local theaters or renowned theater companies for upcoming plays or musicals that pique your interest. Immerse yourselves in the gripping performances, the elaborate sets, and the powerful storytelling unfolding before your eyes. Laugh, gasp, and be moved by the talented actors as they bring characters to life and transport you to different worlds. Let the theater be a platform for shared emotions, deep conversations, and a celebration of the performing arts.",
        imageSrc:
          "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Escape room",
        searchKeyword: "escape+room",
        shortDescription:
          "Test your teamwork and problem-solving skills by participating in an escape room adventure. Work together to solve puzzles and unravel mysteries for an exhilarating experience.",
        longDescription:
          "Brace yourselves for an exhilarating and brain-teasing adventure as you enter an escape room! Choose a themed room and immerse yourselves in the challenge of solving puzzles, finding hidden clues, and unraveling mysteries together. Collaborate, communicate, and put your problem-solving skills to the test as you race against the clock. Engage in moments of excitement, discovery, and 'aha' breakthroughs as you work together to escape the room. This immersive experience will foster teamwork, strengthen your bond, and leave you with a sense of accomplishment and shared victory.",
        imageSrc:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/09/31/85/submergency.jpg?w=1400&h=-1&s=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Biking",
        searchKeyword: "bike+rental",
        shortDescription:
          "Explore your surroundings on a leisurely bike ride. Rent bicycles and pedal through scenic paths or urban streets, enjoying the fresh air and each other's company.",
        longDescription:
          "Strap on your helmets and get ready for a scenic bike ride like no other! Choose a picturesque route that showcases the natural beauty of your surroundings, whether it's a coastal trail, a serene countryside path, or a winding trail through a forest. Pedal at a leisurely pace, allowing yourselves to fully take in the sights, sounds, and scents of the outdoors. Pause at scenic viewpoints, snap photos of breathtaking landscapes, and revel in the exhilarating feeling of the wind against your face as you explore new territories on two wheels. Consider packing a picnic to enjoy at a scenic spot along the way, or plan a stop at a charming café to refuel and treat yourselves to a refreshing beverage. Let the freedom of the open road, the shared adventure, and the beauty of nature create lasting memories and a sense of pure joy.",
        imageSrc:
          "https://images.unsplash.com/photo-1541690922024-ecd939490163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cafe",
        searchKeyword: "cafe",
        shortDescription:
          "Find a cozy cafe and spend quality time together over coffee or tea. Engage in heartfelt conversations, indulge in tasty treats, and enjoy the warm ambiance.",
        longDescription:
          "Get ready to indulge in the cozy and inviting atmosphere of a local cafe! Find a charming cafe with comfortable seating, soft background music, and the aroma of freshly brewed coffee. Savor the rich flavors of specialty coffees, teas, or decadent hot chocolates. Engage in deep conversations, share stories, or simply enjoy moments of comfortable silence as you sip your beverages. Treat yourselves to delectable pastries or desserts that complement your drinks. Whether it's a leisurely afternoon or a morning pick-me-up, the tranquil ambiance of a cafe provides the perfect setting for intimate conversations, relaxation, and the pleasure of good company.",
        imageSrc:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bookstore",
        searchKeyword: "bookstore",
        shortDescription:
          "Get lost in the aisles of a bookstore, exploring books and sharing recommendations. Engage in intellectual discussions, indulge your curiosity, and foster a shared love for literature.",
        longDescription:
          "Get ready to embark on a literary adventure as you explore a local bookstore! Wander through aisles of books, from beloved classics to new releases and hidden gems. Discover different genres, flip through pages, and engage in conversations about your favorite authors or intriguing book covers. Find a cozy nook or a reading area to immerse yourselves in the captivating world of words. Share recommendations, read passages aloud, and lose yourselves in the magic of storytelling. Whether you're searching for a new read or simply enjoying the ambiance, a bookstore is a haven for book lovers and provides a serene backdrop for intellectual conversations and shared love for literature.",
        imageSrc:
          "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cooking or Baking",
        searchKeyword: "supermarket",
        shortDescription:
          "Choose a new recipe or a favorite dish, and spend the evening cooking or baking together. It can be a fun and interactive way to bond.",
        longDescription:
          "Prepare for a delightful cooking or baking session together! Choose a new recipe or one of your all-time favorites. Gather the ingredients and kitchen utensils you need, and dive into the joy of culinary creation. Share tasks, exchange tips and tricks, and enjoy the process of preparing a delicious meal or tempting treats. As you wait for the dish to bake or simmer, take the opportunity to catch up, laugh, and bond over your shared love for good food. Finally, savor your masterpiece and revel in the satisfaction of creating something together.",
        imageSrc:
          "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beer Tasting",
        searchKeyword: "beer+tasting",
        shortDescription:
          "Experience the diverse world of craft beer as you sample a variety of flavors, from refreshing lagers to complex ales, in a convivial setting that sparks conversation and discovery.",
        longDescription:
          "Raise your glasses and get ready to explore the world of beer through a delightful beer tasting experience! Visit a local brewery or find a beer tasting event in your area. Sample a variety of craft beers, from light and refreshing lagers to rich and complex ales. Engage your senses as you observe the colors, inhale the aromas, and savor the distinct flavors of each beer. Discuss the tasting notes, compare your preferences, and learn about the brewing process from knowledgeable staff or brewers. Beer tasting provides a convivial atmosphere for conversation, discovery, and the enjoyment of a beloved beverage.",
        imageSrc:
          "https://images.unsplash.com/photo-1524587253133-266042ff67d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boardgames",
        searchKeyword: "boardgame+cafe",
        shortDescription:
          "Have a game night at home or in a boardgame cafe, with board games or video games. Compete against each other or team up for some friendly competition.",
        longDescription:
          "Get ready for an epic game night! Gather your favorite board games or video games and set the stage for a friendly competition. Create a cozy and inviting atmosphere with comfortable seating and snacks. Take turns choosing games and immerse yourselves in laughter, strategy, and excitement. Whether you're rolling dice, solving mysteries, or building virtual worlds, let the friendly rivalry and shared experiences strengthen your bond. Get ready for a night filled with fun, memorable moments, and perhaps some friendly banter!",
        imageSrc:
          "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stand-up Comedy",
        searchKeyword: "comedy",
        shortDescription:
          "Laugh your hearts out at a stand-up comedy show. Enjoy the comedic talents of performers, giggle together, and create joyful memories.",
        longDescription:
          "Get ready to laugh until your sides hurt as you attend a stand-up comedy show! Check out local comedy clubs or search for renowned comedians performing in your city. Get ready for an evening filled with hilarious anecdotes, sharp wit, and the contagious laughter of the crowd. Allow the comedians to entertain you with their unique perspectives, relatable stories, and clever punchlines. Share in the joy of humor, engage in playful banter, and revel in the shared experience of laughter, which is bound to strengthen your connection and create lasting memories.",
        imageSrc:
          "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1822&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hiking",
        searchKeyword: "hiking+trails",
        shortDescription:
          "Enjoy the great outdoors by going on a hike together. Find a scenic trail nearby and spend quality time while enjoying nature.",
        longDescription:
          "Get ready for an exciting hiking adventure! Lace up your sturdy shoes, grab a backpack with snacks and water, and head out to a scenic trail. Explore nature's beauty as you traverse through winding paths and immerse yourself in serene surroundings. Observe the flora and fauna, breathe in the fresh air, and relish the tranquility of being away from the hustle and bustle. Capture memorable moments with photos or simply pause to appreciate the breathtaking views. Take the opportunity to engage in deep conversations and create lasting memories along the way.",
        imageSrc:
          "https://images.unsplash.com/photo-1536625979259-edbae645c7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Movie Night",
        searchKeyword: "",
        shortDescription:
          "Create a cozy atmosphere at home, make some popcorn, and snuggle up together for a fun movie night. Laugh, cry, and enjoy each other's company while watching your favorite films or discovering new ones.",
        longDescription:
          "Get ready for an amazing movie night at home! Transform your living room into a cozy cinematic haven with twinkling fairy lights, plush pillows, and a big bowl of popcorn. Take turns selecting your favorite movies or explore new ones you've been meaning to watch. Enhance the experience by indulging in movie snacks like nachos or ice cream. Sink into the comfort of your couch, escape into captivating stories, and enjoy a relaxed evening of entertainment.",
        imageSrc:
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dance Class",
        searchKeyword: "dance+class",
        shortDescription:
          "Sign up for a dance class together, whether it's salsa, ballroom, or any other style that interests you. It's a great way to learn something new while having fun.",
        longDescription:
          "Get ready to put on your dancing shoes and have a blast! Sign up for a dance class together and prepare for an exhilarating experience. Whether it's salsa, swing, or hip-hop, let the music move you as you learn new moves and grooves. Embrace the opportunity to laugh, stumble, and support each other's progress. Enjoy the joy of movement, the rhythm of the music, and the sense of accomplishment that comes with mastering a new step. Dance the night away, creating memories and a shared love for the art of movement.",
        imageSrc:
          "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scenic Drive",
        searchKeyword: "scenic+drive+near+me",
        shortDescription:
          "Find a beautiful route nearby and go for a scenic drive. Enjoy the views, play some music, and make occasional stops at interesting locations.",
        longDescription:
          "Buckle up for a breathtaking scenic drive! Choose a picturesque route that showcases the beauty of nature or explore charming small towns along the way. Roll down the windows, feel the wind in your hair, and enjoy the freedom of the open road. Make a playlist of your favorite songs or listen to audiobooks, engaging in deep conversations or simply relishing the peaceful silence together. Take breaks at scenic viewpoints, capture stunning photographs, and allow the journey itself to be an opportunity for discovery, relaxation, and bonding.",
        imageSrc:
          "https://images.unsplash.com/photo-1529424601215-d2a3daf193ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Botanical Garden",
        searchKeyword: "botanical+garden",
        shortDescription:
          "Explore the beauty of nature by visiting a botanical garden or a flower-filled park. It can be a tranquil and visually stunning experience.",
        longDescription:
          "Get ready to be enchanted by the wonders of nature as you visit a botanical garden. Wander through lush landscapes filled with vibrant flowers, towering trees, and fragrant blooms. Take your time exploring different sections, from serene ponds to exotic orchid displays. Engage your senses, inhaling the intoxicating scents and marveling at the intricate details of the plant life around you. Engage in quiet conversations amidst the tranquil beauty or embrace moments of silence as you soak in the serenity. Consider bringing a sketchbook or a camera to capture the essence of the botanical garden. Find a cozy spot to sit and reflect, allowing the peaceful surroundings to rejuvenate your spirits. As you meander through the paths and discover hidden nooks, let the beauty of nature spark inspiration, deep connections, and a profound appreciation for the wonders of the natural world.",
        imageSrc:
          "https://images.unsplash.com/photo-1622818171279-fe0b6a336835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DIY Project",
        searchKeyword: "craft+shop",
        shortDescription:
          "Choose a DIY project, whether it's crafting, painting, or building something together. Get creative and enjoy the process.",
        longDescription:
          "Get your creative juices flowing and plan a DIY craft day! Choose a craft project that interests both of you, whether it's painting, pottery, jewelry making, or scrapbooking. Gather all the necessary supplies and set up a designated crafting area. Share ideas, techniques, and inspiration as you work side by side, embracing the joy of creativity and self-expression. Let your imaginations run wild, experiment with different materials, and encourage each other's artistic endeavors. This hands-on activity will not only bring out your inner artists but also provide a platform for laughter, self-discovery, and a tangible reminder of your special bond.",
        imageSrc:
          "https://images.unsplash.com/photo-1516783154360-123b392d0833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farmers Market",
        searchKeyword: "farmers+market",
        shortDescription:
          "Explore a farmers market together, sample fresh produce, and support local vendors. You can even pick up ingredients to cook a meal together afterward.",
        longDescription:
          "Get ready for a delightful adventure as you visit a vibrant farmers market! Explore stalls overflowing with fresh produce, artisanal goods, and local treasures. Engage with the farmers and vendors, learning about their products and their passion for sustainable living. Taste samples of delectable treats, from juicy fruits to homemade jams. Consider purchasing ingredients for a farm-to-table meal you can prepare together later. Immerse yourself in the lively ambiance, soak up the flavors and colors, and revel in the joy of supporting local producers while creating a culinary experience to remember.",
        imageSrc:
          "https://images.unsplash.com/photo-1526399743290-f73cb4022f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wine Tasting",
        searchKeyword: "wine+tasting",
        shortDescription:
          "Embark on a sophisticated journey of the senses as you savor a selection of wines, from crisp whites to bold reds, learning about their nuances and flavors in a refined and enjoyable atmosphere.",
        longDescription:
          "Embark on a sophisticated and palate-pleasing journey as you indulge in a wine tasting experience! Visit a local vineyard or wine bar that offers wine tasting events. Sample a variety of wines, from crisp whites to robust reds, while learning about the different grape varieties, wine regions, and flavor profiles. Sip, swirl, and savor each wine, allowing the intricate notes and aromas to tantalize your senses. Engage in conversations about the characteristics of each wine, share your preferences, and discover new favorites together. Wine tasting provides a sophisticated and enjoyable setting for deep conversations, and a celebration of the finer things in life.",
        imageSrc:
          "https://images.unsplash.com/photo-1635232823121-e88ed96d8d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Theme Park",
        searchKeyword: "theme+park",
        shortDescription:
          "Gear up for an exhilarating adventure at the theme park! Brace yourself for thrilling rides, live entertainment, and endless fun as you immerse yourself in a world of excitement and laughter.",
        longDescription:
          "Get ready for an unforgettable day of non-stop excitement, laughter, and adrenaline-pumping rides at the theme park! Step into a realm of imagination and thrills, where roller coasters twist and turn, water slides make a splash, and live entertainment brings the park to life. From the heart-stopping drops of the tallest roller coasters to the whimsical adventures of family-friendly attractions, there's something for everyone to enjoy. Feel the rush of wind in your hair as you plummet down steep drops, scream with delight as you spin through twists and loops, and challenge your friends to friendly competitions on interactive games and attractions. Take breaks to refuel with delicious snacks and refreshing treats, and capture magical moments with photos and souvenirs that will forever remind you of this extraordinary day. With its vibrant atmosphere, captivating shows, and a sense of wonder around every corner, the theme park promises an action-packed, laughter-filled experience that will create cherished memories for years to come.",
        imageSrc:
          "https://images.unsplash.com/photo-1611745179863-e123a89795fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Climbing",
        searchKeyword: "climbing+center",
        shortDescription:
          "Embark on an exciting indoor climbing adventure! Conquer challenging walls, test your skills, and experience the thrill of reaching new heights in a safe and controlled environment.",
        longDescription:
          "Get ready for an incredible indoor climbing adventure! As you step into the cutting-edge climbing center, you will be filled with excitement. The towering walls, colorful routes, and diverse climbing surfaces will beckon you both. Securing your climbing gear, you will be eager to push yourselves to new heights. You will exchange ideas and plan your session, starting with warm-up routes to build confidence before tackling more challenging walls. With each climb, you will celebrate victories, cheer each other on, and create lasting memories. This thrilling experience will strengthen your bond and leave you both exhilarated and eager for more.",
        imageSrc:
          "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Plan", null, {});
  },
};
