const {conn } = require("../../config/database")

module.exports = {
    create: (data,callback)=>{
        conn.query(
        
        `insert into cadastro(nome, sobreNome, sexo, email, senha, numero) values(?,?,?,?,?,?)`,
        [
            data.nome,
            data.sobreNome,
            data.sexo,
            data.email,
            data.senha,
            data.numero
        ]
        ),(error, results, fields)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
        }
    }
}