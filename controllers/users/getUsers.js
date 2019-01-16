
const User = require('../../models/users');

var getUsers  = (req,res)=>{
  User.find().exec()
  .then(docs =>{
    res.status(200).render('index',{title:"home",users:docs});
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({error:err});
  })
};

module.exports = getUsers;