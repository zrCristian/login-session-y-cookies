const { getUserByEmail } = require("../data/users")

const keepUserLogged = (req, res, next) => {
    if (req.cookies.userEmail !== undefined) {
        console.log("La cookie existe")
        const email = req.cookies.userEmail
        const user = getUserByEmail(email)

        req.session.isUserLogged = true
        req.session.emailUser = user.email
        console.log("Session seteada")

    }

    next()
}

module.exports = keepUserLogged