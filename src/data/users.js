const users = require("./json/users")

const getUserByEmail = (userJson) => users.find( user => user.email === userJson)

module.exports = {
    getUserByEmail,
}