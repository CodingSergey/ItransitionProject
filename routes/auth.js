const express = require("express");
const {body, validationResult} = require("express-validator");
const {createUser} = require("../userManagement/createUser");
const Account = require("../models/Account");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");

router.post("/register", 
    body("_email").isEmail(),
    body("_password").isLength({min: 6}),
async (req,res) => {
    const {_username, _email, _password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    await createUser(_username,_email,_password);
    const _token = jwt.sign({username: _username, admin: false, exp: Date.now() + 30 * 60000}, "sodposajfspfsvfaoxjq28343r4fsd");
    return res.json({status: "ok", token: _token});  
})

router.post("/login", async (req,res) => {
    const {_email, _password} = req.body;
    const user = await Account.findOne({email: _email});
    if(!user) return res.json(false);
    const result = bcrypt.compare(_password, user.password)
    if(!result) res.json(false);
    const _token = jwt.sign({username: user.username,admin: user.admin, exp: Date.now()+ 30 * 60000}, "sodposajfspfsvfaoxjq28343r4fsd");
    return res.json({status: "ok", token: _token});
});
router.post("/exists", async (req,res)=> {
    const {_email,_username} = req.body;
    Account.exists({email: _email}, (err,result)=> {
        if(err) res.send(err);
        else {
            result? res.json("exists") : res.json("not exists");
        };
    })
})
router.post("/check", async(req,res)=> {
    const {token} = req.body;
    if(token) {
        const decode = jwt.verify(token, "sodposajfspfsvfaoxjq28343r4fsd", function(err,result) {
            if(err) return res.json({login:false});
        })
        res.json({login:true});
    }else{
        res.json({login:false});
    }
})

module.exports = router;