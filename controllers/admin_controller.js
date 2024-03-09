const User = require("../models/user")

exports.getAllUser =  async (req,res) => {
    const user = new User()
    const result = await  user.fetchAll()
    res.json(
        {
          "users" : result
        }
    )
}