const express= require("express");
const user = express.Router();
const storeModel = require("../model/store");
exports.pen=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["pen","Pen"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("pen",{store:data})
    })

};
exports.paper=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["Paper","paper"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("paper",{store:data})
    })

};
exports.pin=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["Pin","Pen"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("pin",{store:data})
    })

};
exports.books=(req,res,next)=>{
    const find = storeModel.find({name:{$in:["books","book"]}});
    find.exec((err,data)=>{
        if(err)
        throw err;
        res.render("Books",{store:data})
    })

};

