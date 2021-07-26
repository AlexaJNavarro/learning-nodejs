const express = require('express') 
const app = express()
const connection = require('./connection/bd')
const userRouter = require('./router/user.router')

app.set('port', 8080)

app.use(express.urlencoded({extended: false}))
app.use('/api/v1', userRouter)

app.listen(app.get('port'), ()=>{
    console.log('http://localhost:' + app.get('port'))
})