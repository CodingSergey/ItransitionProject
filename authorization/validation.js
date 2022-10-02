const Account = require("../models/Account");

const createUser= (username, email, password) => {

}
const uniqueCredentials = (username,email) => {
    const acc = Account.find(acc => acc.email==email || acc.username == username);
    if(acc) return false;
}
module.exports.createUser = createUser;
module.exports.uniqueCredentials = uniqueCredentials;