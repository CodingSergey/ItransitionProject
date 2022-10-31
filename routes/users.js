const express = require("express");
const router = express.Router();

router.get("/allUsers", async (req,res) => {
    const users = await Account.find().lean();
    res.send(users);
});