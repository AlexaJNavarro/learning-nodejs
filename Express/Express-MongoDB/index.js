const express = require('express')
const app = express()
const path = require('path')
const user_middleware = require('./src/middleware/user.middleware')
const connection = require('./src/connection/database')
const routeUser = require('./src/router/user.route')

app.set('port', 8082)

app.use(user_middleware.config)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'src/views'))



app.use('/api/v1', routeUser)

app.listen( app.get('port'), (req, res) => {
    console.log('http://localhost:' + app.get('port'))
})

