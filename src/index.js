const express = require("express");
const app = express();
const cors = require("cors");

const usersController = require("./controllers/user.controller");
const mensController = require("./controllers/men.controller");
const womensController = require("./controllers/women.controller");
const { register, login } = require("./controllers/auth.controller");




app.use(cors());
app.use(express.json());

app.use("/users", usersController);
app.use("/mens", mensController);
app.use("/womens", womensController);
app.post("/register", register);
app.post("/login", login);



module.exports = app;