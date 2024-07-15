const express = require('express');
const notFound = require('./Middleware/notFound');
const errorHandler = require('./Middleware/errorHandler');
const UserRoute = require('./Routers/Route');
const connectDB = require('./ConnectData/ConnectDB');
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
app.use(cors({origin:["http://127.0.0.1:5173","http://localhost:5173"],credentials:true,}));

require('dotenv').config();

app.use(express.json());  
app.use("/job", UserRoute);
// app.use("/auth",require("./Routers/authRouters"));
app.use(notFound);
app.use(errorHandler);

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    // You can use the profile information to find or create a user in your database
    // For example:
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return cb(err, user);
    });
  }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: '/home'
}));

const port = process.env.PORT || 8920

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to database');
    app.listen(port, () => {
      console.log('Server running on port 8920');
    })
  } catch (error) {
    console.log(error);
  }  
}

startApp()