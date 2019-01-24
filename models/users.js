const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  ownerId : {type:String,required:true},
  name: {type : String,required:true},
  age: {type : Number,required: true},
  userImage: {type: String, required:true}
});

module.exports = mongoose.model('User',userSchema);