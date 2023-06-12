export const getUsers = async () => {
    // Simulate a response with fake data
    const fakeResponse = {
        users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
            { id: 3, name: 'Alice Johnson' },
        ],
        dates: [
            { id: 1, date: '2021-10-01' },
            { id: 2, date: '2021-10-02' },
            { id: 3, date: '2021-10-03' },
        ],
        selections: [
            { id: "", date_id: "", plan_id: "" },
        ]
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
};

export const getProduct = async (id) => {
    // Simulate a response with fake data
    const fakeResponse = {
        data: {
            id: id,
            name: 'Fake Product',
            price: 10.99,
        },
    };

    // Return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeResponse);
        }, 500);
    });
};