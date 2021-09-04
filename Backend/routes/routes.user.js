const express = require("express");
const userController = require("../controllers/controllers.user");

const route = express.Router();

route.post("/auth", userController.auth);
route.post("/register", userController.registerUser);
//route.post("/addFir",userController.addFir);
route.post("/getFir", userController.getFir);
module.exports = route;
