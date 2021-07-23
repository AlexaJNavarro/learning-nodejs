const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')


router.get('/users/test', userController.test)
router.get('/users/list-users', userController.listUser)
router.get('/users/create-users', userController.getCreateUser)
router.get('/users/update-users/:id', userController.getUpdateUser)
router.get('/users/delete-users/:id', userController.getDeleteUser)

router.post('/users/create-users', userController.createUser)
router.post('/users/update-users', userController.updateUser)

module.exports = router
