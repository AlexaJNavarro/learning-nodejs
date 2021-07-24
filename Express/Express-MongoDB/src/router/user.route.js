const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/user.controller')

routeUser.get('/user/list',controllerUser.getFind)
routeUser.get('/user/create', controllerUser.getNewUser)
routeUser.post('/user/create', controllerUser.createUser)
routeUser.get('/user/update/:id', controllerUser.getUpdateUser)
routeUser.post('/user/update/', controllerUser.updateUser)
routeUser.get('/user/delete/:id', controllerUser.getDeleteUser)

module.exports = routeUser