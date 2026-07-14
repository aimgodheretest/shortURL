const express = require("express");
const { createuserSignup, userLogin } = require("../controllers/user");
const router = express.Router();

router.post("/signup", createuserSignup);
router.post("/login", userLogin);

module.exports = router;
