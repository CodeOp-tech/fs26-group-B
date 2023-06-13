const cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var plansRouter = require("./routes/plans");
var selectionsRouter = require("./routes/selections");

var authRouter = require("./routes/auth");

//  cec721975da5fa77651485f9e08d6e82269c6c4e

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/plans", plansRouter);
app.use("/api/selections", selectionsRouter);

app.use("/api/auth", authRouter);

module.exports = app;
