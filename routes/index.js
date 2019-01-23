const express = require('express');
const router = express.Router();

const passport = require('../config/passport-setup');
const userController = require('../controllers/users/');

function isLoggedIn (req,res,next){
   if(req.isAuthenticated())
      return next();
   res.redirect('/');
};

router.get('/',(req,res)=>{
   if(req.isAuthenticated()){
     return res.redirect('/profile');
   }
   res.render('index');
});

router.get('/login',(req,res)=>{
   res.render('login',{message : req.flash('loginMessage')});
});
router.post('/login',passport.authenticate('local-login',{
   successRedirect:'/profile',
   failureRedirect: '/login',
   failureFlash: true
}));

router.get('/signup',(req,res)=>{
   res.render('signup',{message: req.flash('signupMessage')});
}); 
router.post('/signup',passport.authenticate('local-signup',{
   successRedirect:'/profile',
   failureRedirect:'/signup',
   failureFlash:true
 }));
 

router.get('/profile',isLoggedIn,userController.gotoProfile);

router.use('/oauth',require('./oauth'));

router.get('/logout',(req,res)=>{
   req.logOut();
   res.redirect('/');
});
 
router.use('/users',isLoggedIn,require('./users'));

router.all('*',(req,res)=>{
   res.status(404).send({msg:'not found'});
});

module.exports = router;