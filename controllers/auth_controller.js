const User = require("../models/user")
const hashPassword = require("password-hash");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res) => {

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
        const token = jwt.sign(
            {username : userInputInfo.username,firstname:userInputInfo.firstname,lastname: userInputInfo.lastname,phone:userInputInfo.phone},
            "pkcs8",
            { expiresIn: "48h"}
        )
        res.status(200).json(
            {
                "message" : "ثبت نام با موفقیت انجام شد",
                "token" : token,
                "success" : userExists,
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

exports.login = async  (req,res) => {
    const user = new User()
    const userInput = {
        username:  req.body.username,
        password : req.body.password
    }
    const result = await user.userLogin(userInput.username,userInput.password)
    console.log(result)
}