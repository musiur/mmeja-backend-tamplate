const express = require("express")
const { signin, signup, verify, refresh, forgetPassword, resetPassword } = require("../controllers/auth.controller")
const verifyToken = require("../middlewares/verifytoken.middleware")
const router = express.Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/forget-password", forgetPassword)
router.post("/reset-password", verifyToken, resetPassword)
router.post("/refresh", verifyToken, refresh)
router.post("/verify", verifyToken, verify)

module.exports = router
