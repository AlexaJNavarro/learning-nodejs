const mongoose = require('mongoose')
const db = {
    localhost: 'localhost',
    user: '',
    password:'',
    database:'db_learning_mongo',
    port: 27017
}
const connection = mongoose.connect(`mongodb://${db.localhost}:${db.port}/${db.database}`).then((db)=>{
    console.log("La conexión ha sido exitosa")
}).catch((err)=>{
    console.log(err)
})

module.exports = connection
