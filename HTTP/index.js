const http = require('http')
const fs = require('fs')
const qs = require("querystring")

const app = http.createServer(Show)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})

function Show(req, res){
    if(req.url == '/'){
        if(req.method == 'GET'){
            fs.readFile('index.html', (err, data)=>{
                if(err){
                    console.log("Se produjo un error")
                    res.setStatus= 404
                }

                res.setHeader("Content-type", "text/html")
                res.write(data)
                res.setStatus = 202
                res.end()

            })
        }

    }else if(req.url == '/users'){
        if(req.method == 'GET'){
            res.setHeader('Content-type','text/html')
            res.write("Lista de Usuarios")
            res.setStatus = 202
            res.end()
        }else if(req.method == 'POST'){
            var value = ''
            req.on('data',(d)=>{
                value += d
            })

            req.on('end',()=>{
                var post = qs.parse(value)
                res.setHeader('Content-type','text/html')
                res.setStatus= 200
                res.write("Nombre: " + post.name)
                res.end()
            })
        }
    }
}