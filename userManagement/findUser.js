const Account = require("../models/Account");
const bcrypt = require("bcrypt");

const findUser = (_email, _password) => {
    let user = Account.find((user) => {user.email === _email});
    if(!user) return false;
    if(bcrypt.compare(_password, user.password)) return user;
    return false;
}

module.exports = findUser;