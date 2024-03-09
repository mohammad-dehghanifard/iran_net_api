const myDb = require("./core/config/db_config")
const express = require("express")
const bodyParser = require("body-parser")
const adminPanelRoutes = require("./core/routes/admin_panel")

const server = express()

server.use(bodyParser.json())


// routs
server.use("/api/admins",adminPanelRoutes)



myDb.connect((err) => {
    if(err) { console.log(`Error : ${err.message}`) }
    else {
        server.listen(8080)
        console.log("Node js connect to Database")
    }
})

