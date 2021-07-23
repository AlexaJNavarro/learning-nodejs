const mysql = require('mysql')
const {mysql_database} = require('./config')

const connection = mysql.createConnection(mysql_database)

connection.connect((err, conn)=>{
    if(err){
        console.log("No se puso conectar la bd")
    }

    console.log("Conexión exitosa")
    return conn
})

module.exports = connection