const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/user.controller')

userRouter.get('/admin', userController.getAdmin)
userRouter.post('/singin', userController.singIn)
userRouter.get('/login', userController.logIn)


module.exports = userRouter