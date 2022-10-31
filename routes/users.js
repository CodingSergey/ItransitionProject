const express = require("express");
const router = express.Router();
const Account=require("../models/Account");
router.get("/allUsers", async (req,res) => {
    const users = await Account.find().lean();
    res.send(users);
});
module.exports=router;