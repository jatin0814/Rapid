const express = require("express");
const oldFirController = require("../controllers/controller.oldFir");
const route = express.Router();

route.post("/getOldFir", oldFirController.getFir);
route.post("/addOldFir", oldFirController.addFir);

module.exports = route;
