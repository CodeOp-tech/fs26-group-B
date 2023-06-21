var jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;
const models = require("../models");

function userShouldBeLoggedIn(req, res, next) {
  const authorization = req.headers["authorization"] || "";
  const token = authorization.replace(/^Bearer\s/, "");

  if (!token) {
    res.status(401).send({ message: "please provide a token" });
  } else {
    jwt.verify(token, supersecret, async function (err, decoded) {
      if (err) res.status(401).send({ message: err.message });
      else {
        //everything is awesome
        const user = await models.User.findByPk(decoded.user_id);
        req.user_id = decoded.user_id;
        req.user = user;
        next();
      }
    });
  }
}

module.exports = userShouldBeLoggedIn;
