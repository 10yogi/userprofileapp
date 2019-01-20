const getUser = require('./getUser');
const gotoHome = require('./gotoHome');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const addUser = require('./addUser');

module.exports = {
  addUser : addUser,
  getUser : getUser,
  gotoHome :gotoHome,
  updateUser : updateUser,
  deleteUser : deleteUser
};