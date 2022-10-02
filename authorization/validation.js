const Account = require("../models/Account");
const bcrypt = require("bcrypt");

const createUser = async (_username, _email, _password) => {
    await Account.create({
        username: _username,
        password: await bcrypt.hash(_password, 10),
        email: _email,
        admin: false,   
        blocked: false
    });
}
module.exports.createUser = createUser;