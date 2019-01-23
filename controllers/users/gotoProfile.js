
const User = require('../../models/users');

var gotoProfile  = (req,res)=>{
  User.find().exec()
  .then(data =>{
    res.status(200).render('profile',{title:"profile",data:data,user:req.user});
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({error:err});
  })
};

module.exports = gotoProfile;