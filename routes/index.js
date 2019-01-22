const express = require('express');
const router = express.Router();
const userController = require('../controllers/users/');

const authCheck = (req,res,next)=>{
   console.log(req.user);
   if(!req.user){
      res.render('login');
   }else{
      next();
   }
};


router.get('/',authCheck,userController.gotoHome);
router.use('/oauth',require('./oauth'));
//auth logout
router.get('/logout',(req,res)=>{
   //handle with passport
   req.logOut();
   res.redirect('/');
 })
 
router.use('/users',authCheck,require('./users'));

router.all('*',(req,res)=>{
   res.status(404).send({msg:'not found'});
});

module.exports = router;