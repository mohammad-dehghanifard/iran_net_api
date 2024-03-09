const express = require("express")
const controller = require("../../controllers/admin_controller")
const router = express.Router()

router.get("/users",controller.getAllUser)
router.post("/register",controller.testRegister)

module.exports = router