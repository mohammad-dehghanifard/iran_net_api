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

