
const isUserLogged = (req, res, next) => {
    if (req.session.isUserLogged) {
        res.locals.isUserLogged = true
    } else {
        res.locals.isUserLogged = false

    }

    next()
}

module.exports = isUserLogged