const Account = require("../models/Account");

const createUser= (username, email, password) => {

}
const uniqueCredentials = (email) => {
    const acc = Account.findOne().where("email").equals(email).exec();
    if(acc) return acc;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;