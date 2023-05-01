const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const User = require("../app/Models/UserModel")

console.log("KK");
passport.use(new LocalStrategy({
    passReqToCallback: true
},
    (req ,email, password, done) => {
        
            User.findOne({ email: email }, (err, user) => {
            console.log(user);
            if (err) return done(err);
            if (!user) return done(null, false, req.flash("error", "User not found"))
            // if (!user) return done(null, false, { message: "Incorrect username" }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) return done(err)
                if (result) return done(null, user)
                return done(null, false, req.flash("error", "Incorrect password"))
                // return done(null, false, { message: "Incorrect password" }"));
            })
        }) // added closing parenthesis here
    }
))

passport.serializeUser((user, done) => {
    // You can specify which user information to store in the session here.
    // In this example, just the user ID is stored.
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (err) return done(err)
        done(null, user)
    })
})
