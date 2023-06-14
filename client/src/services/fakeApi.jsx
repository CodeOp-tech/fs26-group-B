// because it is fake we have to create a hardcoded id for each table

const users = [
  {
    id: 1,
    name: "John Doe",
    username: "John",
    email: "john@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "Jane",
    email: "jane@gmail.com",
    password: "password",
  },
];

const events = [
  { id: 1, userId_1: 1, userId_2: 2, chosenPlanId: 1, status: close },
];

const selections = [
  { id: 1, eventId: 1, userId: 1, planId: 1 },
  { id: 2, eventId: 1, userId: 2, planId: 1 },
];

const plans = [
  {
    id: 1,
    name: "Beach",
    keyword: "beach",
    shortDescription:
      "Soak up the sun and enjoy a day at the beach together. Lounge on the sand, take a dip in the water, and maybe even have a beachside picnic.",
    longDescription:
      "Get ready to soak up the sun and dive into the refreshing waves as you head to the beach! Feel the warm sand between your toes, listen to the soothing sound of crashing waves, and breathe in the salty ocean air. Set up your beach chairs or lay down a colorful beach blanket to claim your spot. Take leisurely strolls along the shoreline, build sandcastles, or challenge each other to a friendly game of beach volleyball. Don't forget to pack sunscreen, beach games, snacks, and plenty of water to stay hydrated. Whether you're lounging, swimming, or simply enjoying each other's company, the beach provides the perfect backdrop for a relaxing and memorable day together.",
    imageSrc:
      "https://images.unsplash.com/photo-1495546992359-94a48035efca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    name: "Picnic",
    imgSrc:
      "https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
  },
  {
    id: 3,
    name: "Dinner",
    imgSrc:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    name: "Cinema",
    imgSrc:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    name: "Museum",
    imgSrc:
      "https://images.unsplash.com/photo-1515169273894-7e876dcf13da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 6,
    name: "Bar",
    imgSrc:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80",
  },
  {
    id: 7,
    name: "Ping pong",
    imgSrc:
      "https://images.unsplash.com/photo-1676827613262-5fba25cee5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 8,
    name: "Bowling",
    imgSrc:
      "https://images.unsplash.com/photo-1628139483293-eea5a6b2e0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  },
  {
    id: 9,
    name: "Karaoke",
    imgSrc:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  },
  {
    id: 10,
    name: "Concert",
    imgSrc:
      "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 11,
    name: "Theatre play",
    imgSrc:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 12,
    name: "Escape room",
    imgSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/09/31/85/submergency.jpg?w=1400&h=-1&s=1",
  },
  {
    id: 13,
    name: "Hiking",
    imgSrc:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80",
  },
  {
    id: 14,
    name: "Biking",
    imgSrc:
      "https://images.unsplash.com/photo-1541690922024-ecd939490163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 15,
    name: "Cafe",
    imgSrc:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 16,
    name: "Bookstore",
    imgSrc:
      "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 17,
    name: "Baking",
    imgSrc:
      "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80",
  },
  {
    id: 18,
    name: "Boardgames",
    imgSrc:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 19,
    name: "Stand-up Comedy",
    imgSrc:
      "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1822&q=80",
  },
];

export const fakeApi = {
  getPlan: async (planId) => {
    const plan = plans.filter((plan) => plan.id === planId)[0];

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(plan);
      }, 500);
    });
  },

  getUser: async (userId) => {
    // Simulate a response with fake data

    // Find and refers the requested user based on the userId
    const requestedUser = users.map((user) => user.id === userId);

    const fakeResponse = {
      requestedUser,
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  },

  searchPartner: async (name) => {
    // Simulate a response with fake data
    //search on users array is there is a user with same username as the name given
    const requestedUser = users.map((user) => user.name === name);
    const fakeResponse = {
      requestedUser,
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  },

  // to create a user in the user table to have a userId with the credential in blanck
  // it is mainly when user 1 is registered and user 2 is not registered yet user 1 creates and event
  // createUserPending: async (id) => {
  //     users.push = { id: id, name: null, username: null, email: null, password: null }
  //     const userId_2 = id;
  //     const fakeResponse = userId_2 ;
  //     return new Promise((resolve) => {
  //         setTimeout(() => {
  //             resolve(fakeResponse);
  //         }, 500);
  //     }
  //     );

  // },

  // Fake post request to add new event to table events in the database
  // receive the userId_1
  // happens when user 1 initiate an event match with user 2
  createEvent: async (id, userId_1) => {
    // Simulate a response with fake data

    events.push = {
      id: id,
      userId_1: userId_1,
      userId_2: null,
      chosenPlanId: null,
      status: open,
    };
    const fakeResponse = `new event created id:${id}`;
    // while planId is not null the status is open
    // is going to receive the planId from selection table when the planId is twice with the same dateEvent_id

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  },

  // AUTHENTICATION
  // Put request to put into a userId its credential info when it is registered
  addUserIdToEvent: async (
    eventId,
    userId_2,
    name,
    username,
    email,
    password
  ) => {
    // Simulate a put into fake users table
    users.push = {
      id: userId_2,
      name: name,
      username: username,
      email: email,
      password: password,
    };
    events.find((event) => event.id === eventId).userId_2 = userId_2;

    const fakeResponse = userId_2;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  },

  // fake post request to add new selection to the selection table in the database
  addSelection: async (id, eventId, userId, planId) => {
    // simulate a post into fake selection table
    selections.push = {
      id: id,
      planId: planId,
      eventId: eventId,
      userId: userId,
    };

    const matchingEventId = selections.filter(
      (selection) => selection.eventId === eventId
    );

    const matchingPlanIds = matchingEventId.map(
      (selection) => selection.planId
    );

    const repeatedPlanId = matchingPlanIds.filter((planId, index) => {
      matchingPlanIds.indexOf(planId) !== index;
    });

    if (repeatedPlanId.length > 0) {
      planId = repeatedPlanId[0];
      events.find((event) => event.eventId === eventId).chosenPlanId = planId;
      events.find((event) => event.eventId === eventId).status = close;
    }

    const fakeResponse = `new match found planId:${planId}`;

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  },

  //     // fake put request to put into DateEvent table in database the id of the event_id when in the
  //     // selection table the event_id is two times with the same dateEvent_id
  //     getMatch: async (eventId) => {
  //         // Simulate a response with fake data if the same event_id and the planId is twice in the selection table
  //         const matchingEventId = selections.filter((selection) => selection.eventId === eventId);

  //         const matchingPlanIds = matchingEventId.map((selection) => selection.planId);

  //         const repeatedPlanId = matchingPlanIds.filter((planId, index) => {
  //             matchingPlanIds.indexOf(planId) !== index;
  //         });

  //         const fakeResponse =
  //             repeatedPlanId.length > 0 ? repeatedPlanId[0] : "The is no match yet"
  //             ;

  //         // Return a promise that resolves with the fake response object after 500ms
  //         return new Promise((resolve) => {
  //             setTimeout(() => {
  //                 resolve(fakeResponse);
  //             }, 500);
  //         });
  //     },

  //     // is the is a match this should be called to update the event table with the planId and status close
  //     putEventMatchPlan: async (planId, eventId) => {

  //         events.find(event => event.eventId === eventId).planId = planId;
  //         events.find(event => event.eventId === eventId).status = close;

  //         const fakeResponse =
  //             "event match plan updated";

  //             return new Promise((resolve) => {
  //                 setTimeout(() => {
  //                     resolve(fakeResponse);
  //                 }, 500);
  //             }
  //             );
  //     },
};

export { users, events, selections, plans };

export default fakeApi;
