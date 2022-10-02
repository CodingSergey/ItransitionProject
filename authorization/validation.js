const Account = require("../models/Account");

const createUser=async  (_username, _email, _password) => {
    await Account.create({
        username: _username,
        password: _password,
        email: _email,
        admin: false,
        blocked: false
    });
}
const uniqueCredentials = async (email) => {
    const acc = await Account.findOne().where({email: email}).exec();
    if(!acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;