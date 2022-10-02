const Account = require("../models/Account");

function createUser() {

}
function uniqueCredentials(username,email) {
    const acc = Account.find(acc => acc.email==email || acc.username == username);
    if(acc) return false;
}