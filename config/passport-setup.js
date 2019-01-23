const passport = require('passport');
const keys = require('./keys');
const User2 = require('../models/user2')
var localStrategy = require('./strategies/local'); 
var googleStrategy = require('./strategies/google-oauth');


passport.serializeUser((user,done)=>{
  done(null,user._id);
  console.log(user + " is serialzed");
});

passport.deserializeUser((id,done)=>{
  console.log("user is deserialize user");
  User2.findById(id).then(user =>{
    console.log("done");
    done(null,user);   
  });  
});

passport.use('google',googleStrategy(User2,keys));

passport.use('local-signup',localStrategy.signup(User2));
passport.use('local-login',localStrategy.login(User2));

module.exports = passport;
