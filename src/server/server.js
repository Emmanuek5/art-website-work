const express = require('express')
const app = express()

const websocket = require("./websocket")
const path = require('path');
require("dotenv").config()

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
// import the passport module
// import the config module
//connect to database
app.use("/favicon.ico", express.static("src/public/favicon.ico"));
app.use(express.static(path.join(__dirname,"../public")))
app.set("views",  "src/views");
const apiRoute = require("./routes/api.js");


app.use("api",apiRoute)
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.listen(process.env.PORT,(s)=>{
    console.log("Server Started");
})

module.exports = {
  server : app,
  websocket: websocket
}