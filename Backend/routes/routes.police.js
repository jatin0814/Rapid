const express = require("express");
const policeController = require("../controllers/controllers.police");
const route = express.Router()

route.post("/addFir",policeController.addFir);

module.exports = route;