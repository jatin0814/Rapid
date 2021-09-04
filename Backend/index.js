const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(fileUpload());
const url = process.env.MONGODBURL;
app.get("/status", (req, res, next) => {
  res.send("UP!");
});
app.use("/", require("./routes/routes.oldFir"));
app.use("/user", require("./routes/routes.user"));
app.use("/police", require("./routes/routes.police"));
//app.use("/fir",require("./routes/routes.oldFir"))

mongoose.connect(url, () => {
  app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
  });
});
