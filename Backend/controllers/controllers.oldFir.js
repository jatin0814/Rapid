const OldFir = require("../models/oldFir");

exports.addFir = async (req, res, next) => {
  try {
    let imgBase64 = req.files.file.data.toString("base64");
    let oldFir = new OldFir({
      imgbase64: imgBase64,
      description: req.body.description,
    });
    await oldFir.save();
    res.status(200).send({ message: "FIR added!" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

exports.getFir = async (req, res, next) => {
  try {
    let fir = await OldFir.find();
    res.status(200).send({ data: fir });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};
