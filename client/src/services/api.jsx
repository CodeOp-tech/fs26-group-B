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

getEvent(hashId)

getEvent(eventId)

getOpenEvents(userId) search open status event for userid and returns the whole event




// Selections

addSelection(eventId, userId, planId)


*/
