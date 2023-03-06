// home.routes.js
const express = require("express");
const { home, about } = require("../controllers/home.controller");
const router = express.Router();

// Define the home page route
router.get("/", home);
router.get("/about", about);

module.exports = router;
