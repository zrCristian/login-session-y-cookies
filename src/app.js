const express = require("express")
const bcrypt = require("bcryptjs");
const session = require("express-session")
const cookieParser = require("cookie-parser");

const router = require("./routes/home");
const keepUserLogged = require("./middlewares/keepUserLogged");
const isUserLogged = require("./middlewares/isUsserLogged");

const app = express()
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({ 
    secret: "Mensaje Secreto",
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieParser())


app.use(keepUserLogged)
app.use(isUserLogged)
app.use("/", router)

app.listen(PORT, () => console.log(`[server]: running on port ${PORT}`))


// const password = "test"

// const passwordHashed = bcrypt.hashSync(password, 10)

// console.log(passwordHashed);