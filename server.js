const myDb = require("./core/config/db_config")
const express = require("express")
const bodyParser = require("body-parser")

const server = express()

server.use(bodyParser.json())




myDb.connect((err) => {
    if(err) { console.log(`Error : ${err.message}`) }
    else { console.log("Node js connect to Database") }
})

