const express = require("express");
const policeController = require("../controllers/controllers.police");
const route = express.Router()

route.post("/addFir",policeController.addFir);
route.post("/addRequest",policeController.addRequest);
route.post("/getRequest",policeController.getRequest);
route.post("/actionOnRequest",policeController.actionOnRequest);

module.exports = route;