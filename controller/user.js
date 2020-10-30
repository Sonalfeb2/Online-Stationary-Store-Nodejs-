const express= require("express");
const user = express.Router();
const storeModel = require("../model/store");
exports.pen=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["pen","Pen"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("pen",{ title:"Pen",store:data})
    })

};
exports.paper=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["Pin","pin"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("paper",{title:"PaperPins",store:data})
    })

};
exports.greeting=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["Greeting","greeting"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("greeting",{title:"Greetings",store:data})
    })

};
exports.books=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["Book","book"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("Books",{title:"Books",store:data})
    })

};
exports.details=(req,res,next)=>{
    const id = req.params.storeid;
    storeModel.findById(id).then((result)=>{
        res.render("details",{ title:"Product Details",store:result})
    })
}

