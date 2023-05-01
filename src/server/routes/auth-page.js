const express = require('express');
const router = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../../functions/functions");
const passport = require("passport");
const  bcrypt = require("bcrypt")
const UserSchema = require("../../app/Models/UserModel");




router.get("/login", (req, res) => {
    const errors = req.flash().error || []
  res.render("auth/login", {errors});
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
})

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  }),(req,res)=>{
    console.log(req.body);
  }
);

router.post("/create",checkNotAuthenticated,(req,res) => {
    try {
        const data = req.body;
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            password2 : data.password2
         }

         if (password !== password2) {
          
         } 


            
         
      


  

 
    } catch (error) {
        
    }
})


module.exports = router;