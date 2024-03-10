const User = require("../models/user")
const hashPassword = require("password-hash")

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

    const userInputInfo = {
        "username":  req.body.username,
        "password":  req.body.password,
        "firstname":  req.body.firstname,
        "lastname":  req.body.lastname,
        "profile": req.body.profile,
        "phone": req.body.phone,
        "charge": 3000,
    }
    const hashPass = hashPassword.generate(userInputInfo.password)
    console.log(userInputInfo)
    const user = new User()
    const userExists  = await user.registerUser(
        userInputInfo.username,
        hashPass,
        userInputInfo.firstname,
        userInputInfo.lastname,
        userInputInfo.profile,
        userInputInfo.charge,
        userInputInfo.phone
    )
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