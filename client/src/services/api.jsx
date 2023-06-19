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
    await axios.get(`/users/username/${username}`);
  },

  //To search for login user pending events
  getOpenEvents: async (userId) => {
    await axios.get(`/users/${userId}/events`);
  },


  // SELECTIONS & PLANS
  getAllPlans: async () => {
    await axios.get(`/plans`);
  },

  getPlan: async (planId) => {
    await axios.get(`/plans/${planId}`);
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