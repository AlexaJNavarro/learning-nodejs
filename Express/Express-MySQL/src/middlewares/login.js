const login = (req, res, next) => {
    const logeado = true
    if(logeado){
        console.log("se encuentra logeado")
        next()
    }else{
        console.log("no se encuentra logeado")
    }
   
}

module.exports = {login}