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

    async registerUser(inputUsername,firstname,lastname,profile,charge,phone) {
      try {
          const queryForCheckUsername =("SELECT * FROM users WHERE username =" + myDb.escape(inputUsername))
           await  myDb.query(queryForCheckUsername,(error,result) =>{
               console.log(result)
               if(result.length !== []){
                   console.log("کاربری با این نام کاربری در حال حاضر وجود دارد")
               } else {
                   console.log("user registered....")
               }
          })


      } catch (e) {
          console.log("Error: ",e.message)
      }


    }

}



module.exports = User