const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../app/Models/UserModel");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // change usernameField to a generic name, e.g. 'login'
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      console.log(username, password);

      // Search for the user by either email or username
      User.findOne(
        {
          $or: [{ email: username }, { username: username }],
        },
        (err, user) => {
          if (err) return done(err);
          if (!user)
            return done(
              null,
              false,
              req.flash("error", "User not found")
            );
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) return done(err);
            if (result) return done(null, user);
            return done(
              null,
              false,
              req.flash("error", "Incorrect password")
            );
          });
        }
      );
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) return done(err);
    done(null, user);
  });
});
