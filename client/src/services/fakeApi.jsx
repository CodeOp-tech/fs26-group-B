

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
]


const events = [
    { id: 1, userId_1: 1, userId_2: 2, planId: 1, status: close },
]

const selections = [
    { id: 1, eventId: 1, userId: 1, planId: 1 },
    { id: 2, eventId: 1, userId: 2, planId: 1 },
];

const plans = [
    { id: 1, name: "Beach", imgSrc: "https://images.unsplash.com/photo-1495546992359-94a48035efca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",  },
    { id: 2, name: "Picnic", imgSrc: "https://images.unsplash.com/photo-1505250469679-203ad9ced0c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlja25pY3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 3, name: "Dinner", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 4, name: "Movie", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 5, name: "Museum", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 6, name: "Bar", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 7, name: "Ping pong", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 8, name: "Bowling", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 9, name: "Karaoke", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 10, name: "Concert", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=60", },
    { id: 11, name: "Theatre play", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGluZ2VyJTIwY29sb3JmdWwlMjBwaWNuaWN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 12, name: "Escape room", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNjYXBlJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 13, name: "Hiking", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlrZSUyMGhpbGxhbmR8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 14, name: "Biking", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5nJTIwYmVhdXR5fGVufDB8fDB8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 15, name: "Cafe", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 16, name: "Bookstore", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 17, name: "Cooking", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
    { id: 18, name: "Boardgame", imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", },
]


export const getUser = async (userId) => {
    // Simulate a response with fake data
    
    // Find and refers the requested user based on the userId
    const requestedUser = users.map(user => user.id === userId);

    const fakeResponse = {
        requestedUser
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
};


// to create a user in the user table to have a userId with the credential in blanck
// it is mainly when user 1 is registered and user 2 is not registered yet user 1 creates and event
export const createUser = async () => {
    const fakeResponse = {
        user: [
            { id: 1, name: null, username: null, email: null, password: null, },
        ]
    }
}
    
// Fake post request to add new event to table events in the database
// receive the userId_1 and userId_2 from the user table
// happens when user 1 initiate an event match with user 2
export const createEvent = async (userId_1, userId_2) => {
    // Simulate a response with fake data

    events.push = {id: 1, userId_1: userId_1, userId_2: userId_2, planId: null, status: open }
    const fakeResponse = 
        "event created"
            // while planId is not null the status is open
            // is going to receive the planId from selection table when the planId is twice with the same dateEvent_id
    
    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
}

// fake put request to put into a userId its credential info when it is registered
    export const addUserCredential = async (userId_2) => {
        // Simulate a response with fake data
        const fakeResponse = {
            user: [
                { id: 1, name: 'John Doe', },
            ]
        };
    }

// fake post request to add new selection to the selection table in the database
export const addSelection = async (eventId) => {
    // Simulate a response with fake data
    const fakeResponse = {
        selection: [
            { id: 1, eventId: eventId, planId: 1},
        ],
    };
    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
}

// fake put request to put into DateEvent table in database the id of the event_id when in the
// selection table the event_id is two times with the same dateEvent_id
export const getMatch = async (eventId, plansId) => {
    // Simulate a response with fake data



    events.map(event => {
        if (event.id === eventId) {
         event.plansId = plansId;
        }
    });

    const fakeResponse = {
        user: requestedUser,
    };
    const fakeResponse = {
        dateEvent_id: dateEvent_id,
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
}


