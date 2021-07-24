const userModel = require('../../src/model/user.model')
const { render } = require('ejs')

const getFind = (req, res)=>{
    userModel.find({},(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.render('userList-views', {users: result})
        }
    })
}

const getNewUser =(req, res)=>{
    res.render('userCreate-views')
}

const createUser = (req, res)=>{
    const data = req.body
    const user = new userModel({
        name: data.name,
        age: data.age
    })
    user.save((err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.redirect('/api/v1/user/list')
        }
    })
}

const getUpdateUser = (req, res)=>{
    const id = req.params.id
    userModel.find({_id : id},(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.render('userUpdate-views', {users: result})
        }
    })
}

const updateUser = (req, res)=>{
    const id = { _id : req.body.id }
    const value = { $set : {name : req.body.name, age: req.body.age} }
    userModel.updateOne(id, value, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.redirect('/api/v1/user/list')
        }
    })

}

const getDeleteUser = (req, res)=>{
    const id = {_id : req.params.id}
    userModel.deleteOne(id, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.redirect('/api/v1/user/list')
        }
    })

}

module.exports = {getFind, getNewUser, createUser, getUpdateUser, updateUser, getDeleteUser}