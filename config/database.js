const mysql = require('mysql')

const conn = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_ROST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
}) 

conn.connect((erro) =>{
    if (!erro) {
        console.log(`Tambem conectado ao banco`)
    } else {
        console.log(`Não foi possivel conectar ao banco ${erro}`)
    }
})
module.exports = conn