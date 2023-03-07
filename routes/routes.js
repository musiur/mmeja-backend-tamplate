// routes.js
const express = require("express")
const homeRoutes = require("./home.routes")
const userRoutes = require("./user.routes")
const authRoutes = require("./auth.routes")

const router = express.Router()

// Mount the other routes object on the root URL path
router.use("/", homeRoutes)
router.use("/users", userRoutes)
router.use("/auth", authRoutes)

module.exports = router
