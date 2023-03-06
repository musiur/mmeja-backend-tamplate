// controllers/user.controller.js

const db = require("../database");
const userSchema = require("../schemas/user.schema");

const UserModel = db.model("UserModel", userSchema);

module.expots = UserModel;

// Define controller functions that use the User model
