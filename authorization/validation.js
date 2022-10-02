const Account = require("../models/Account");

const createUser= (username, email, password) => {

}
const uniqueCredentials = (email) => {
    const acc = Account.findOne({email: email}).exec();
    if(acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;