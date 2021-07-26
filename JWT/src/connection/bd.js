const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/jwtdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((db)=>{
    console.log('la base de datos fue conectada exitosamente')
}).catch((err)=>{
    console.log('No de realizo la conexión a la bd' + err)
})
module.exports = connection