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


  // SELECTIONS & PLANS
  getAllPlans: async () => {
    await axios.get(`/plan`);
  },

  getPlan: async (planId) => {
    await axios.get(`/plan/${planId}`);
  },

  addSelection: async (eventId, userId, planId) => {
    await axios.post(`/events/${eventId}/users/${userId}/plans/${planId}`);
  },

/*





// Events

getAllEvents()

createEvent(inviter, invitee)

getEvent(hash)

getEvent(eventId)

// getOpenEvents(userId) search open status event for userid and returns the whole event

getEvent(inviteeId)




// Selections



*/


}




export default Api;