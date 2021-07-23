const express = require("express")
const app = express()
const user = require('./router/user.router')
const middlewares_log = require('./middlewares/login')
const path = require('path')
const { search } = require("./router/user.router")
const connection = require('./connection')

//MIDDLEWARES
app.use(middlewares_log.login)

app.use(express.urlencoded({extended:false})) //Permite visualizar os datos que envia el cliente

//ROUTER
app.use(user)

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname + '/public')))

//CONFIGURACIONES Y MOTORES DE VISTAS
app.set('port', 3000) //estableciendo configuraciones

//ejs viene por defecto en express 
// establece a EJS como el motor de visualización para la aplicación Express
app.set('view engine', 'ejs') // es un motor de platilla -> permite agregar funcionalidad al html o sea, script a html 

//Es importante tener en cuenta que res.render() buscará en una viewscarpeta la vista. Así que solo tienes que definir
app.set('views', path.join(__dirname , 'view')) //estableciendo la url de la carpeta views



app.listen(3000, ()=>{
    console.log("http://localhost:" + app.get('port'))
})