const bcrypt = require("bcryptjs")
const { getUserByEmail } = require("../data/users")

// sesiones HTTP => nos sirve para guardar algun sesison (datos) que nos sirva del usuario al iniciar sesion
// Diferencia entre sesiones HTTP y cookies las sesiones  se guardan en el servidor (los clientes no pueden acceder a la sesion) y ... 

const index = (req, res) => {
    console.log(req.session)
    console.log("\n locals: ")
    console.log(res.locals)

    // console.log(req.cookies)

    res.render("index")
}

const logout = (req, res) => {
    req.session.destroy()
    res.clearCookie("userEmail")

    res.redirect("/")
}

const loginView = (req, res) => {
    if (req.session.isUserLogged) {
        return res.redirect("/")
    }

    res.render("login")
}

const login = (req, res) => {
    const body = req.body
    const user = getUserByEmail(body.email)
    console.log(body)
    const keepUserLogger = body.keepUserLogger === "true";

    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password)


    if (isPasswordCorrect) {
        req.session.isUserLogged = true
        req.session.emailUser = user.email
    }

    if(keepUserLogger) {
        res.cookie("userEmail", user.email)
    }


    res.redirect("/")
}

module.exports = {
    index,
    loginView,
    login,
    logout
}