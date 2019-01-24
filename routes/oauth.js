const router = require('express').Router();

const passport = require('../config/passport-setup');
const controller = require('../controllers/users')

//auth with google
router.get('/google',passport.authenticate('google',{
  scope : ['profile']
}));
router.get('/google/redirect',passport.authenticate('google',{
  failureRedirect:'/',
  successRedirect: '/profile',
  failureFlash:true
}));


module.exports = router;
