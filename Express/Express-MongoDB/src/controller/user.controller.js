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
    // const valueUser = {
    //     name: data.name,
    //     age: data.age
    // }
    console.log('data: ' + data)
    // console.log('valueUser' + valueUser)
    // valueUser.save((err, result)=>{
    //     if(err){
    //         console.log(err)
            
    //     }else{
    //         console.log(result)
    //         // res.redirect('/api/v1/user/list')
    //     }
    // })
    
}

module.exports = {getFind, getNewUser, createUser}