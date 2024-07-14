const express = require("express");
const router = express.Router();
const signUpMiddleware = require("./signup");
const loginUser = require("./login");
// const checkPassword = require("./check-password");
// const { tokenVerification } = require("../../middleware");

// ROUTES * /api/auth/
router.post("/login", loginUser);
router.post("/signup", signUpMiddleware);
// router.post("/", checkPassword);

module.exports = router;