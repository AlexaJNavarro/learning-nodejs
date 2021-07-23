const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/user.controller')

routeUser.get('/user/list',controllerUser.getFind)
routeUser.get('/user/create', controllerUser.getNewUser)
// routeUser.post('/user/create', controllerUser.createUser)
module.exports = routeUser