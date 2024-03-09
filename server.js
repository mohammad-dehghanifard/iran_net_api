const myDb = require("./core/config/db_config")


myDb.connect((err) => {
    if(err) { console.log(`Error : ${err.message}`) }
    else { console.log("Node js connect to Database") }
})

