var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var user2Schema = new mongoose.Schema({
  local : {
    username: String,
    password:String,
    thumbnail:String,
  },
  google:{
    username:String,
    googleId : String,
    thumbnail: String,
    email:String,
    token : String,
  }
});

user2Schema.methods.generateHash = (password)=>{
  console.log(password);
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};
user2Schema.methods.validPassword = (password,hash)=>{
  return bcrypt.compareSync(password,hash);
};

module.exports = mongoose.model('User2',user2Schema);