const User = require("../models/user")
const hashPassword = require("password-hash")
const jwt = require("jsonwebtoken")

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

