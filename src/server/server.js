const express = require('express')
const app = express()
const {checkNotAuthenticated} = require("../functions/functions");
const passport = require("passport")
const websocket = require("./websocket")
const path = require('path');
require("dotenv").config()
const session = require("express-session");
const flash = require("express-flash");
app.set("view engine", "ejs");
// import the passport module
// import the config module
//connect to database
require("../functions/passport");
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

app.use(express.json());
  
app.use("/favicon.ico", express.static("src/public/favicon.ico"));
app.use(express.static(path.join(__dirname,"../public")))
app.set("views",  "src/views");
const apiRoute = require("./routes/api.js");
app.use("/api",apiRoute)

const authRoute = require("./routes/auth.js");
app.use("/auth",authRoute)
const authpageRoute = require("./routes/auth-page.js");
app.use("/",authpageRoute)
const shopRoutes = require("./routes/shop.js");
app.use("/shop", shopRoutes)
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.redirect("/");
  });
});


app.listen(process.env.PORT,(s)=>{
    console.log("Server Started");
})

module.exports = {
  server : app,
  websocket: websocket
}