const getUser = require('./getUser');
const getUsers = require('./getUsers');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const addUser = require('./addUser');

module.exports = {
  addUser : addUser,
  getUser : getUser,
  getUsers :getUsers,
  updateUser : updateUser,
  deleteUser : deleteUser
};