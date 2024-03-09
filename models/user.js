const myDb = require("../core/config/db_config")

class User {
    async fetchAll() {
        const query = "SELECT * FROM users";
        try {
            return await new Promise((resolve, reject) => {
                myDb.query(query, (error, result) => {
                    if (error) {
                        console.log(`Error :::: ${error.message}`)
                        reject(error)
                    } else { resolve(result) }

                })

            })
        } catch (error) {
            console.log(`Error : ${error.message}`);
            throw error;
        }
    }
}

module.exports = User