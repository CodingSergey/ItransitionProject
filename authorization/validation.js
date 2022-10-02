const Account = require("../models/Account");

const createUser= (username, email, password) => {

}
const uniqueCredentials = (email) => {
    const acc = Account.find({email:email});
    if(acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;