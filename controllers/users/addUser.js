const User = require('../../models/users');
const mongoose = require('mongoose');

var addUser = (req,res)=>{
  console.log(req.user._id);
  const user = new User({
    ownerId : req.user._id,
    name: req.body.name,
    age : req.body.age,
    userImage : req.file? req.file.path:null
  });
  user.save().then(result => {
    res.status(200).json({
      message : 'user added',
      user : user
    });
  })
  .catch(err=>{
    res.status(400).json(err.message);
  });
};

module.exports = addUser;