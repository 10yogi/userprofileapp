const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const loginModel = require('../models/login')

passport.serializeUser((user,done)=>{
  done(null,user._id);
  console.log(user + " is serialzed");
});

passport.deserializeUser((id,done)=>{
  console.log("user is deserialize user");
  loginModel.findById(id).then(user =>{
    console.log("done");
    done(null,user);   
  });  
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL : '/oauth/google/redirect',
      clientID:keys.google.clientID,
      clientSecret:keys.google.clientSecret
    },
    (acessToken,refreshToken,profile,done) => {
     // console.log(profile);
      //check is user already exist in database
      loginModel.findOne({googleId:profile.id}).then((user)=>{
        if(user){
          //already have user
         console.log('user is : ',user); 
          done(null,user);
        }else{
          //if not
          new loginModel({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail:profile._json.image.url
          }).save().then(newuser=>{
            console.log(`new google login created : ${newuser}`);
            done(null,newuser);
          });  
        }
      });
    }
  )
)