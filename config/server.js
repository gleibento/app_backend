require("dotenv").config()
const express = require("express")
const bodyParser = require ("body-parser") 

const server  = express()
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.listen(process.env.APP_PORT,()=>{
    console.log(`Server is running in ${process.env.APP_PORT}`)
})