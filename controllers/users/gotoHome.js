
const User = require('../../models/users');

var gotoHome  = (req,res)=>{
  User.find().exec()
  .then(docs =>{
    res.status(200).render('home',{title:"home",users:docs,username: req.user.username,userimage:req.user.thumbnail});
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({error:err});
  })
};

module.exports = gotoHome;