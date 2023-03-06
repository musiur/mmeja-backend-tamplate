const express = require("express");
const { signin, signup } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/signin", signin);
router.get("/signup", signup);

module.exports = router;
