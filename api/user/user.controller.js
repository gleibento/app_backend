const {create}  = require('./user.service')

module.exports = {
    createUser:(req, resp) =>{
        const body = req.body
        const salt = genSaltSync(10)
        body.senha = hashSync(body.senha, salt)
        create(body,(error, results) =>{
            if(error){
                console.log(error)
                return resp.status(500).json({
                    sussess: 0,
                    message: `erro ao conectar ao banco ${error}`
                })
            }
            return resp.status(200).json({
                sussess:1,
                data:`${results}`
            })
        })

    }
}