const Police = require("../models/policeStation");
const shortid = require('shortid');
 


exports.addFir = async (req,res,next) => {
  try{  //let imgBase64 = req.files.file.data.toString("base64");
    let station = await Police.findById("6133af65ede2322c78ffa11f");
    station.FIRs.push({
        //imgBase64:imgBase64,
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
    let station = await Police.findById("6133af65ede2322c78ffa11f");
    console.log(req.files);
    console.log(req.files);
    let imgBase64;
    if(!req.files){
        imgBase64 = null;
    }else{
       imgBase64 = req.files.file.data.toString("base64");
    }
    let id = shortid.generate();
    station.requests.push({
        reqId:id,
        ...req.body,
        imgBase64:imgBase64
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
        console.log("sss")
        let station = await Police.findById("6133af65ede2322c78ffa11f")
        res.status(200).send({data:station.requests});
    }catch(error){
        console.log(error);
        res.status(400).send({message:err.message})
    }
}

exports.actionOnRequest = async (req,res,next) => {
    try{
        console.log(req.data);
        let station = await Police.findById("6133af65ede2322c78ffa11f")
        station.requests.forEach(request => {
            if(request.reqId === req.body.reqId){
                request.status = req.body.action;
                console.log(request)
            }
        });
        console.log(station);
       // await station.save();
        await Police.findOneAndUpdate({_id:"6133af65ede2322c78ffa11f"},{...station});
        res.status(200).send({message:"Status Update!!"});
    }catch(error){
        console.log(error);
        res.status(400).send({message:error.message})
    }
}