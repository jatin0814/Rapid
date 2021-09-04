const Police = require("../models/policeStation");
const shortid = require('shortid');
 


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



exports.addRequest = async(req,res,next) =>{
    try{
        console.log(req.body)
    let station = await Police.findById("613217ee5cbc5ae80fc9cbc4");
    let id = shortid.generate();
    station.requests.push({
        reqId:id,
        ...req.body
    })
    await station.save();
    res.status(200).send({message:"Request added!"})
    }catch(error){
        console.log(error);
        res.status(400).send({message:err.message})
    }
}

exports.getRequest = async(req,res,next) => {
    try{
        let station = await Police.findById("613217ee5cbc5ae80fc9cbc4")
        res.status(200).send({data:station.requests});
    }catch{
        console.log(error);
        res.status(400).send({message:err.message})
    }
}

exports.actionOnRequest = async (req,res,next) => {
    try{
        let station = await Police.findById("613217ee5cbc5ae80fc9cbc4")
        station.forEach(request => {
            if(request.reqId === req.body.reqId){
                request.status = req.body.action;
            }
        });
        await station.save();
        res.status(200).send({message:"Status Update!!"});
    }catch{
        console.log(error);
        res.status(400).send({message:err.message})
    }
}