const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/stationary");
const admin= require("./router/admin");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));
mongoose.connect("mongodb://localhost:27017/Stationary",{useNewUrlParser:true, useUnifiedTopology:true,}).then(result => {
console.log("database connected successfully");
}).catch((err) => {
  console.log("failed",err);
})
app.set("view engine","ejs")
app.use(router);
app.use(admin);
app.listen(8080);