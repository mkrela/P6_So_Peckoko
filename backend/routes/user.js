const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();
const userCtrl = require("../controllers/user");

const loginLimiter= rateLimit({
    windoMs: 15 * 60 * 1000, // 15 minutes //
    max : 3, // Bloque après 3 essais // 
});

router.post("/signup", userCtrl.signup);
router.post("/login", loginLimiter, userCtrl.login);

module.exports = router;
