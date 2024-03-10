const myDb = require("../core/config/db_config")
const e = require("express");
const hashPassword = require("password-hash");

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

    async registerUser(inputUsername,password,firstname, lastname, profile, charge, phone) {
        try {
            const queryForCheckUsername = "SELECT * FROM users WHERE username = ? LIMIT 1";
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
                const user = {
                    firstname : firstname,
                    lastname : lastname,
                    profile : profile,
                    charge : charge,
                    phone : phone,
                    username : inputUsername,
                    password : password
                }
                await  myDb.query("INSERT INTO users SET ?",user)
                return true;
            }
        } catch (error) {
            console.log("Error : ", error.message);
            throw error;
        }
    }

    async userLogin(username,password) {
        try {
            const query = "SELECT * FROM users WHERE username = ? LIMIT 1"
            return await new Promise(
                (resolve, reject) => {
                    myDb.query(query, [username], (error, user) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(hashPassword.verify(password, user[0].password))
                        }
                    })
                }
            )
        } catch (e) {
            console.log(`Error : ${e.message}`)
        }
    }

}



module.exports = User