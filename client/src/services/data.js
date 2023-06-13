import fakeApi from './fakeApi'; // Import the fake API functions
// import realApi from './api'; // Import the real API functions

const useFakeApi = true; // Set this flag to true to use the fake API, or false to use the real API

const api = useFakeApi ? fakeApi : null; // Choose the API to use based on the flag

export default api;