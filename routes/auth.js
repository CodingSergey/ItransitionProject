const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser, uniqueCredentials} = require("../authorization/validation");
const Account = require("../models/Account");
const router = express.Router();

router.post("/register", 
    body("email").isEmail(),
    body("password").isLength({min: 6}),
async (req,res) => {
    const {_username, _email, _password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    if(!Account.exists({email: _email})) return res.status(400).json({error: "Email already exists"});
    await createUser(_username,_email,_password);
    return res.json({status: "ok");
})
module.exports = router;