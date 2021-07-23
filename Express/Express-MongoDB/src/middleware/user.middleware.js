const config = (req, res, next) => {
    const login = true
    if(login){
        console.log('Se ha logeado')
        next()
    }else{
        console.log('Necesita logearse')
    }
}

module.exports = {config}