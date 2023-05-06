const express = require('express');
const router = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../../functions/functions");
const passport = require("passport");
const  bcrypt = require("bcrypt")
const UserSchema = require("../../app/Models/UserModel");
const {md5} = require("../../functions/md5.js");

router.get("/login", (req, res) => {
    const errors = req.flash().error || []
  res.render("auth/login", {errors});
});

router.get("/signup", (req, res) => {
    const errors = req.flash().error || [];
  res.render("auth/signup", {errors});
})

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/shop",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.post("/create", checkNotAuthenticated, async (req, res) => {
  try {
    const { username, email, password, password2 } = req.body;
console.log(req.body);
    // Check if the user already exists
    const existingUser = await UserSchema.findOne({ email: email });
    if (existingUser) {
      req.flash("error", "User already exists");
      console.log("What?");
      return res.redirect("/signup");
    }

    // Validate user input
    if (password !== password2) {
      req.flash("error", "Passwords do not match");
      console.log(password,password2);
      console.log("O");
      return res.redirect("/signup");
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate a token
    const token = await bcrypt.hash(hashedPassword + Date.now() + email, salt);

    // Create a new user
    const user = new UserSchema({
      email: email,
      password: hashedPassword,
      token: token,
      username: username
    });

    console.log(user);

    // Save the new user to the database
    await user.save();

    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});



module.exports = router;