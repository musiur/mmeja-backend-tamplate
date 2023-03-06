// user.routes.js
const express = require("express");
const { users } = require("../controllers/user.controller");
const router = express.Router();

// Define the user-related routes
router.get("/", users);

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
