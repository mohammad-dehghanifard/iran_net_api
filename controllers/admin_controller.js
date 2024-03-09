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
    const userExists  = await user.registerUser(username)
    if(userExists === true){
        res.status(200).json(
            {
                "message" : "ثبت نام با موفقیت انجام شد",
                "success" : userExists
            }
        )
    } else {
        res.status(400).json(
            {
                "message" : "این نام کاربری قبلا ثبت شده است",
                "success" : userExists
            }
        )
    }

}