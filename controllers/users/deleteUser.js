
const User = require('../../models/users');
const fs = require('fs');

var deleteUser = (req,res,next)=>{
  const id = req.params.userId;
  User.findById(id).exec()
  .then(doc=>{
    fs.unlink(doc.userImage,()=>User.deleteOne({_id:id})
      .exec()
      .then(result=>{
        console.log(JSON.stringify(result));
        res.status(200).json({
          message : 'User Deleted',
        })
      })
      .catch(err=>{
        console.log(err);
        res.status(400).json(err)
      }));
  })
  .catch(err=>{
    console.log(err);
  });
}

module.exports = deleteUser;