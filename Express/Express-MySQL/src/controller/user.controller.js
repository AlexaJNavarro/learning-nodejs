const { render } = require('ejs')
const path = require('path')
const { send } = require('process')
const root = path.join(__dirname , '../public')
const connection = require('../connection')

const test = (req, res)=>{
    res.sendFile('index.html',{root:root})
    
} 

// const users = [
//     {id: 1, name: "Alexandra" },
//     {id: 2, name: "Leonardo" }
// ]

const listUser = (req, res)=>{
    // res.render('listById', {users: users})
    const sql = 'select * from users'
    connection.query(sql,(err, result)=>{
        if(err){
            console.log('No se pudo realizar el listado')
        }
        console.log('LISTADO DE USUARIOS')
        res.render('list-user', {users: result})
    })
}

const getCreateUser = (req, res)=>{
    res.render('create-user')
}

const createUser = (req, res)=>{
    // users.push(req.body)
    console.log(req.body)
    const sql = 'Insert into users SET ?'
    const data = req.body
    connection.query(sql, data, (err, result)=>{
        if(err){
            console.log('no se pudo registrar al nuevo usuario')
        }
        console.log('Usuario registrado')
        res.redirect('/users/list-users')
    })
}

const getUpdateUser = (req, res)=>{
    const data = req.params.id
    const sql = 'select * from users where id = ?'
    connection.query(sql, data, (err, result)=>{
        if(err){
            console.log('No se pudo actualizar')
        }
        console.log(Object.values(result));
        res.render('update-user', {users : result})
    })
    // res.render('update-user')
}

const updateUser = (req, res) => {
    const sql = `update users set  name='${req.body.name}', age= ${req.body.age} where id= ${req.body.id}`
    connection.query(sql, (err, data)=>{
        if(err){
            console.log("No se pudo realizar la actualización")
        }
        console.log("se realizo la actualización")
        res.redirect('/users/list-users')
    })
}

const getDeleteUser = (req, res)=>{
    console.log(req.params.id)
    const sql = `delete from users where id = '${req.params.id}'`
    connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        }
        console.log("Usuario eliminado")
        res.redirect('/users/list-users')
    })
}

module.exports = {test, listUser, getCreateUser, createUser, getUpdateUser, updateUser, getDeleteUser}