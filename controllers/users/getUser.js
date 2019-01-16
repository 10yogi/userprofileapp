const User = require('../../models/users');

var getUser = (req,res,next)=>{
  const id = req.params.userId;
  User.findById(id).exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({error: err});    
  })
};

module.exports = getUser;