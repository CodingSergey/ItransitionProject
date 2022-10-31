const express=require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();
const authorize = require("../middleware/authorization");
const Collection = require("../models/Collection");
router.post("/addcollection", authorize, async (req,res)=> {
    const {_name,_description,_topic}=req.body;
    const c = Collection.findOne({name: _name}).lean();
    if(c.name) return res.json("exists");
    await Collection.create({
        name:_name,
        description: _description,
        topic: _topic
    })
    res.send({status: "ok"});
})
module.exports=router;