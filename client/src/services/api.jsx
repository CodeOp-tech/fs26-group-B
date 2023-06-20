import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const Api = {
  // Auth

  // Get the user that is logged in
  getMyProfile: async () => {
    try {
      const { data } = await axios.get(`/api/auth/profile`);
      // send back data to server
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  updatePassword: async (password) => {
    try {
      const { data } = await axios.post(`/api/auth/password`, {
        password: password,
      });
      // send back data to server
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // Users
  getUser: async (userId) => {
    console.log(userId);
    try {
      const { data } = await axios.get(`/users/${userId}`);
      // send back data to server
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  //To search for a user by username
  getUsername: async (username) => {
    try {
      console.log(username);
      const { data } = await axios.get(`/api/users/username/${username}`, {
        method: "GET",
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  //To search for login user pending events
  // getOpenEvents: async (userId) => {
  //   await axios.get(`/events/${userId}`);
  // },

  resetPassword: async (userId, password) => {
    console.log(userId);
    try {
      const { data } = await axios.post(`/register/${userId}`, {
        password: password,
      });
      // send back data to server
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // Events

  getAllEvents: async () => {
    try {
      const { data } = await axios.get("/api/events", {
        method: "GET",
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  createEvent: async (userId_2) => {
    console.log(userId_2);
    try {
      const { data } = await axios.post("/api/events", {
        method: "POST",
        userId_2: userId_2,
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // getEvent by hash
  getEventByHash: async (hash) => {
    try {
      const { data } = await axios.get(`/api/events/private/${hash}`, {
        method: "GET",
      });
      // send back data to server
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // getEvent by eventId
  getEventById: async (eventId) => {
    try {
      const { data } = await axios.get(`/api/events/${eventId}`, {});
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  //search open status event for userid and returns the whole event
  getOpenEvents: async (userId) => {
    try {
      const { data } = await axios.get(`/api/events/user`);
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // getEvent(inviteeId)

  // SELECTIONS & PLANS
  getAllPlans: async () => {
    try {
      const { data } = await axios.get("/api/plans", {
        method: "GET",
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getPlan: async (planId) => {
    try {
      const { data } = await axios.get(`/plan/${planId}`, {
        method: "GET",
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  

  addSelection: async (eventId, userId, planId) => {
    try {
      const { data } = await axios.post("/api/selections", {
        eventId: eventId,
        userId: userId,
        planId: planId,
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default Api;
