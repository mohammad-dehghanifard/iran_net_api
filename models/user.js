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

    async registerUser(inputUsername, firstname, lastname, profile, charge, phone) {
        try {
            const queryForCheckUsername = "SELECT * FROM users WHERE username = ?";
            const result = await new Promise((resolve, reject) => {
                myDb.query(queryForCheckUsername, [inputUsername], (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });

            if (result.length > 0) {
                return false;
            } else {
                console.log("user register");
                return true;
            }
        } catch (error) {
            console.log("خطا: ", error.message);
            throw error;
        }
    }



}



module.exports = User