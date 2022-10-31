const express = require("express");
const router = express.Router();
const Account=require("../models/Account");
const authorize = require("../middleware/authorization");
router.get("/allUsers",authorize, async (req,res) => {
    const users = await Account.find().lean();
    res.send(users);
});
router.delete("/deleteuser/:id", authorize, async(req,res)=> {
    const id = req.params["id"];
    Account.deleteOne({_id: id}).exec();
    res.send({status: id});
})
router.put("/toggleblock/:id", authorize, async(req,res)=> {
    const id= req.params["id"];
    Account.findById(id, function(err,account) {
        account.blocked= !account.blocked;
        account.save();
    }) 
    res.send({status: "ok"});
})
module.exports=router;