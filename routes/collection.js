const express=require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();
const authorize = require("../middleware/authorization");
const Collection = require("../models/Collection");
router.post("/addcollection", authorize, async (req,res)=> {
    const {_name,_description,_topic,_author}=req.body;
    const c = Collection.exists({name: _name, author: _author})
    if(c) res.send("exists");
    await Collection.create({
        name:_name,
        description: _description,
        topic: _topic,
        author: _author,
        date: Date.now()
    });
    res.send({status: "ok"});
})
module.exports=router;
