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
    if(! await uniqueCredentials(email)) return res.status(400).json({error: "Email already exists"});
    const user = createUser(username,email,password);
    return res.json({status: "ok", user: user});
})
module.exports = router;