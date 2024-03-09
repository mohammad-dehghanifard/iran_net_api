const myDb = require("../core/config/db_config")

class User {
    fetchAll() {
        const query = "SELECT * FROM users"
        myDb.query(query,(error,result) => {
            if(error) {
                console.log(`Error : ${error.message}`)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = User