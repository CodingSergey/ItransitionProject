const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser, uniqueCredentials} = require("../authorization/validation");
const router = express.Router();

router.post("/register", 
    body("email").isEmail(),
    body("password").isLength({min: 6}),
async (req,res) => {
    const {username, email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    if(!uniqueCredentials(email)) return res.status(400).json({error: uniqueCredentials(email)});
    createUser(username,email,password);
    res.json({status: "ok"});
})
module.exports = router;