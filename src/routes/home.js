const express = require("express")
const { index, login, loginView, logout } = require("../controllers/home")

const router = express.Router()

router.get("/", index)
router.get("/login", loginView)

router.post("/logout", logout)

router.post("/login", login)



module.exports = router