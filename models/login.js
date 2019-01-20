const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleloginSchema = new Schema({
  username:String,
  googleId : String,
  thumbnail: String,
});

const Googlelogin = mongoose.model('Googlelogin',googleloginSchema);

module.exports = Googlelogin;