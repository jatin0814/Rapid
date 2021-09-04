const Police = require("../models/policeStation");


exports.addFir = async (req,res,next) => {
  try{  let imgBase64 = req.files.file.data.toString("base64");
    let station = await Police.findById("613217ee5cbc5ae80fc9cbc4");
    station.FIRs.push({
        imgBase64:imgBase64,
        address:req.body.address
    })
    await station.save();
    res.status(200).send("fir added!");}catch(err){
        res.status(400).send({message:err.message})
    }
}

