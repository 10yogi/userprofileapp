const GoogleStrategy = require('passport-google-oauth20');

module.exports = function (User2,keys){
  return new GoogleStrategy({
    callbackURL : '/oauth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
  },
  (acessToken,refreshToken,profile,done) => {
    // console.log(profile);
    //check is user already exist in database
    User2.findOne({'google.googleId':profile.id}).then((user)=>{
      if(user){
        //already have user
        console.log('user is : ',user); 
        done(null,user);
      }else{
        //if not
        var newUser = User2();
        newUser.google.username = profile.displayName;
        newUser.google.googleId = profile.id;
        newUser.google.thumbnail = profile._json.image.url;
        
        newUser.save()
        .then(res=>{
          console.log(`new google login created : ${newUser}`);
          done(null,newUser);
        })
        .catch(err=>{
          done(err);
        });
      }
    });
  })
} 