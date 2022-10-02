const Account = require("../models/Account");

const createUser= (_username, _email, _password) => {
    const user = Account.create({
        username: _username,
        email: _email,
        password: _password,
        blocked: false,
        admin: false
    });
    return user
}
const uniqueCredentials = async (email) => {
    const acc = await Account.findOne().where({email: email}).exec();
    if(!acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;