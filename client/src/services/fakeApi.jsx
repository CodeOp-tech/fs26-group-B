export const getUser = async (userId) => {
    // Simulate a response with fake data
    const user = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
    ]

    // Find the requested user based on the userId
    const requestedUser = user.find(user => user.id === userId);

    const fakeResponse = {
        user: requestedUser,
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
};


// to create a user in the user table to have a userId with the credential in blanck
export const reserveUser = async () => {
    const fakeResponse = {
        user: [
            { id: 1, name: 'John Doe', },
        ]
    }
}
    
// Fake post request to add new dateEvent to database receive the userId_1 and userId_2 from the user table
export const createEvent = async (userId_1, userId_2) => {
    // Simulate a response with fake data
    const fakeResponse = {
        event: [
            { id: 1, userId_1: userId_1, userId_2: userId_2, planId: null, status: open },
            // while planId is not null the status is open
            // is going to receive the planId from selection table when the planId is twice with the same dateEvent_id
        ]
    };
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

// fake get match request to post into DateEvent table in database the id of the event_id when in the
// selection table the event_id is two times with the same dateEvent_id
export const getMatch = async (dateEvent_id) => {
    // Simulate a response with fake data
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


