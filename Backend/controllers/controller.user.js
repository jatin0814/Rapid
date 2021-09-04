const User = require("../models/user");
const Police = require("../models/policeStation");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  console.log(req.body);
  const user = new User({
    email: req.body.email.toLowerCase(),
    password: req.body.password.toLowerCase(),
    phoneNo: req.body.phoneNo,
  });
  try {
    await user.save();
    res.status(200).send({ message: "user registerd!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
exports.auth = async (req, res, next) => {
  console.log(req.body);
  if (req.body.isPolice) {
    //console.log(req.body.email)

    console.log(req.body.isPolice);
    const stationId = req.body.id.toLowerCase();
    const password = req.body.password.toLowerCase();
    let station = await Police.findOne({
      $and: [{ stationId: stationId }, { password: password }],
    });
    if (!station) {
      res.status(400).send({ message: "Wrong username or Password!" });
      return;
    }
    const token = jwt.sign(
      { stationId: station.stationId, id: station._id },
      "secret",
      {
        expiresIn: "11h",
      }
    );
    console.log(station);

    console.log(station.stationId);
    console.log(station.password);
    console.log(station.isPolice);
    //console.log((await Police.findById("61334c0566ffa5aa6f51c5ad")).isPolice);
    res.status(200).send({
      message: "Authentication Successful",
      stationId: stationId,
      isPolice: true,
      token: token,
    });
    return;
  }
  console.log(req.body.email);
  console.log(req.body.password);
  const email = req.body.email.toLowerCase();
  const password = req.body.password.toLowerCase();
  let user = await User.findOne({
    $and: [{ email: email }, { password: password }],
  });
  if (!user) {
    res.status(400).send({ message: "Wrong username or Password!" });
    return;
  }
  const token = jwt.sign({ id: user._id }, "secret", {
    expiresIn: "11h",
  });
  res.status(200).send({
    message: "Authentication Successful",
    isPolice: user.isPolice,
    token: token,
    userId: user.id,
  });
  return;
};

// exports.addFir = async (req,res,next) => {
//     try{let imgBase64 = req.files.file.data.toString("base64");
//     let user = await User.findById(req.user.userId);
//     user.FIRs.push({
//         imgBase64:imgBase64,
//         ...req.body
//     })
//     await user.save();
//     res.status(200).send("fir added!");}catch(err){
//         res.status(400).send({message:err.message})
//     }
// }

exports.getFir = async (req, res, next) => {
  try {
    const station = await Police.findById("61334c0566ffa5aa6f51c5ad");
    console.log(req.body.id);
    let userFir = station.requests.filter(
      (request) => request.id === req.body.id
    );
    res.status(200).send({ requests: userFir });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};
