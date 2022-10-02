const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser, uniqueCredentials} = require("../authorization/validation");
const router = express.Router();
const Account = require("../models/Account");

router.post("/register", 
    body("email").isEmail(),
    body("password").isLength({min: 6}),
(req,res) => {
    const {username, email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    if(!uniqueCredentials(username,email)) return res.status(400).json({error: "Username or email already exist"});
    createUser(username,email,password);
    res.json({status: "ok"});
})
module.exports = router;