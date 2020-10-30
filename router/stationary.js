const { Router } = require("express");
const express = require("express");
const  app = express.Router();
const user = require("../controller/user");

app.use("/pen",user.pen);
app.use("/pin",user.pin);
app.use("/paper",user.paper);
app.use("/books",user.books);
app.get("/",(req,res,next)=>{
    res.render("home");
    
});



module.exports = app;