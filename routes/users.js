const express = require("express");
const router = express.Router();
const Account=require("../models/Account");
const authorize = require("../middleware/authorization");
router.get("/allUsers",authorize, async (req,res) => {
    const users = await Account.find().lean();
    res.send(users);
});
module.exports=router;