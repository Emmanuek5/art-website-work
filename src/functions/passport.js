const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const User = require("../app/Models/UserModel")

passport.use(new LocalStrategy(
    (email, password, done) => {
            User.findOne({ email: email }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, {
                message: "Incorrect emailr password"
            })
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) return done(err)
                if (result) return done(null, user)
                return done(null, false, {
                    message: "Incorrect password"
                })
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
