const express = require('express');
const router = express.Router();
const userController = require('../controllers/users/');

router.get('/',userController.getUsers);
router.use('/users',require('./users'));

router.all('*',(req,res)=>{
   res.status(404).send({msg:'not found'});
});

module.exports = router;