const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const upload = require('../config/multerConfig');
const userController = require('../controllers/users/');


router.get('/',userController.getUsers);

router.post('/',upload.single('userImage'),userController.addUser);

router.get('/:userId',userController.getUser);

router.put("/:userId",userController.updateUser);

router.delete("/:userId",userController.deleteUser);


module.exports = router;