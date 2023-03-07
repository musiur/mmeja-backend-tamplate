// controllers/user.controller.js

const db = require("../database/database")
const userSchema = require("../schemas/user.schema")


const UserModel = db.model("user", userSchema)

module.exports = UserModel
// Define controller functions that use the User model
