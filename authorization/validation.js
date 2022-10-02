const Account = require("../models/Account");

const createUser= (username, email, password) => {
    const user = Account.create({
        username: username,
        email: email,
        password: password,
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