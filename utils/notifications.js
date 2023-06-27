require("dotenv").config();
const Pusher = require("pusher");

console.log(process.env);

const service = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true,
});

module.exports = {
  sendInvitation(userId, eventId, text) {
    service.trigger(`user-${userId}`, "invitation", {
      eventId,
      text,
    });
  },

  sendMatch(userId, eventId, text) {
    service.trigger(`user-${userId}`, "match", {
      eventId,
      text,
    });
  },
};
