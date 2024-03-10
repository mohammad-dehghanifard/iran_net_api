const express = require("express")
const controller = require("../../controllers/auth_controller")

const router = express.Router()

router.post("/register",controller.userRegister)

module.exports = router