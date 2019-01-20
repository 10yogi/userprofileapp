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
router.use('/auth',require('./auth'));
router.use('/users',authCheck,require('./users'));

router.all('*',(req,res)=>{
   res.status(404).send({msg:'not found'});
});

module.exports = router;