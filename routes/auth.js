const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser} = require("../userManagement/createUser");
const findUser = require("../userManagement/findUser");
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
    if(!Account.exists({email: _email, username: _username},
        function(err,doc) {
            return doc;
        }    
        )) return res.json({status: "ok", token: "repeat"});
    await createUser(_username,_email,_password);
    const _token = jwt.sign({username: _username, exp: Date.now() + 30 * 60000}, "sodposajfspfsvfaoxjq28343r4fsd");
    return res.json({status: "ok", token: _token});  
})

router.post("/login", async (req,res) => {
    const {_email, _password} = req.body;
    const user = findUser(_email, _password);
    if(!user) return res.json({error: "Bad credentials"});
    const _token = jwt.sign({username: user.username, exp: Date.now()+ 30 * 60000}, "sodposajfspfsvfaoxjq28343r4fsd");
    return res.json({status: "ok", token: _token});
});

module.exports = router;