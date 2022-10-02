const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser} = require("../authorization/validation");
const Account = require("../models/Account");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.post("/register", 
    body("_email").isEmail(),
    body("_password").isLength({min: 6}),
async (req,res) => {
    const {_username, _email, _password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    if(!Account.exists({email: _email})) return res.status(400).json({error: "Email already exists"});
    await createUser(_username,_email,_password);
    const _token = jwt.sign({username: _username});
    return res.json({status: "ok", token: _token});
})
module.exports = router;