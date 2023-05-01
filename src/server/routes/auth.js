const express = require("express")
const { checkAuthenticated, checkNotAuthenticated } = require("../../functions/functions")
const router = express.Router()
const passport = require("passport");


router.get("/", checkNotAuthenticated, (req, res) => {
    res.render("auth/login")
})

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/signup", checkNotAuthenticated, (req, res) => {
    res.render("auth/signup")
})














module.exports = router