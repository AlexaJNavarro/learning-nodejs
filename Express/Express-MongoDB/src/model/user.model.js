const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    age: Number
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
