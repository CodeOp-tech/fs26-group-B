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

getAllEvents()

createEvent(inviter, invitee)

getEvent(hash)

getEvent(eventId)

getEvent(inviteeId)




// Selections

addSelection(eventId, userId, planId)


*/
