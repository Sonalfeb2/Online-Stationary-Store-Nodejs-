const { Router } = require("express");
const express = require("express");
const  app = express.Router();
const user = require("../controller/user");

app.use("/pen",user.pen);
app.use("/greeting",user.greeting);
app.use("/paper",user.paper);
app.use("/books",user.books);

app.get("/details/:storeid",user.details);
app.get("/",(req,res,next)=>{
    res.render("home",{title: "Welcome to the Stationary Store"});
    
});



module.exports = app;