const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../model/user.model')

const getAdmin = (req, res)=>{
    console.log('admin active')
}

const logIn = (req, res) =>{
    console.log('logIn active')
}

const singIn = (req, res) =>{
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    user.save((err, result)=>{
        if(err){
            res.send('No se pudo registrar al usuario' + err)
        }else{
            res.send('Se registro correctamente al usuario')
        }
    })
}

module.exports = {getAdmin, logIn, singIn}