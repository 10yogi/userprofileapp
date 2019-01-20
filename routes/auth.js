const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');
const controller = require('../controllers/users')
//auth login
router.get('/login',(req,res)=>{
  res.render('login');
});

//auth logout
router.get('/logout',(req,res)=>{
  //handle with passport
  req.logOut();
  res.redirect('/');
})

//auth with google
router.get('/google',passport.authenticate('google',{
  scope : ['profile']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  //res.send(req.user);
  res.redirect('/') ;
});




module.exports = router;
