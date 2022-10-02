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
const uniqueCredentials = (email) => {
    const acc = Account.findOne().where("email").equals(email).exec();
    if(acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;