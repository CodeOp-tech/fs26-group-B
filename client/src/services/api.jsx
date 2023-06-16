import axios from "axios";

// Users

export const getUser = async (userId) => {
  await axios.get(`/users/${userId}`);
};

/* 
getUser(username)





// Plans

getAllPlans()

getPlan(planId)




// Events

createEvent(inviter, invitee)

getEvent(hash)




// Selections

addSelection(eventId, userId, planId)


*/
