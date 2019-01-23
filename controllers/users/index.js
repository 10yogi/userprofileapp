const getUser = require('./getUser');
const gotoProfile = require('./gotoProfile');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const addUser = require('./addUser');

module.exports = {
  addUser : addUser,
  getUser : getUser,
  gotoProfile :gotoProfile,
  updateUser : updateUser,
  deleteUser : deleteUser
};