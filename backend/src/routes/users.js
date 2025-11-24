const express = require("express");
const { login, requireAuth, getProfile, createUser } = require("../controllers/usersController");

const router = express.Router();

router.post("/login", login);
router.get("/profile", requireAuth, getProfile);
router.post("/register", createUser)

module.exports = router;
