const User = require('../../models/users');


var updateUser = (req,res,next)=>{
  const id = req.params.userId;
  if(!id){
    return res.status(400).json({message:"id is required"});
  }
  if(!req.body.name){
    return res.status(400).json({message:"name is required"});
  }
  if(!req.body.age){
    return res.status(400).json({message:"age is required"});
  }
  User.updateOne({_id:id},{$set : {
    name : req.body.name,
    age: req.body.age
  }}).exec()
  .then(result=>{
    res.status(200).json({
      message : 'User updated'
    });
  })
  .catch(err=>{
    res.status(400).json(err);
  })
};

module.exports = updateUser;