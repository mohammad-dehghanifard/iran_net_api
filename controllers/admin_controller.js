const User = require("../models/user")

exports.getAllUser =  async (req,res) => {
    const user = new User()
    const userList = await user.fetchAll()
    res.status(200).json(
        {
           "message" : "succes",
          "users" : userList
        }
    )
}

exports.testRegister = async (req,res) => {
    const username = req.body.username

    const user = new User()
    const myuser = await user.registerUser(username)
    console.log(username)
    res.status(200).json(
        {
            "message" : "succes",
            "user" : myuser
        }
    )
}