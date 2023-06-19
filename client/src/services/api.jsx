import axios from "axios";

// Auth

// export const login = async (username, password) => {
//   await axios("/api/auth/login", {
//     method: "POST",
//     data: { username, password },
//   });
// };



export const Api = 
{

  // Users

  getUser: async (userId) => {
    await axios.get(`/users/${userId}`);
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


  // Events

  getAllEvents: async () => {
    try {
      const { data } = await axios.get("/api/events", {
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }

  },

  createEvent: async (userId_1, userId_2) => {
    console.log(userId_1, userId_2);
    try {
      const { data } = await axios.post("/api/events", {
        userId_1: userId_1,
        userId_2: userId_2,
      });
      // send back data to server
      return data;
    } catch (error) {
      console.log(error);
    }

  },

// getEvent(hash)

// getEvent(eventId)
  
//search open status event for userid and returns the whole event
  getOpenEvents: async (userId) => {
    try {
      const { data } = await axios.get(`/api/events/${userId}`, {
      });
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
       
        });
        // send back data to server
        return data;
      } catch (error) {
        console.log(error);
      }
  
  },

  getPlan: async (planId) => {
    await axios.get(`/plans/${planId}`);

  },

  addSelection: async (eventId, userId, planId) => {
    try {
      const { data } = await axios.post(`/selections/${planId}`, {
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


}




export default Api;