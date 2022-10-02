const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required:true},
    admin: {type: Boolean, required: true},
    blocked: {type: Boolean, required: true}
});

const Account = mongoose.model("Account", AccountSchema);
module.exports = Account;