const express=require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();
const authorize = require("../middleware/authorization");
const Collection = require("../models/Collection");
router.post("/addcollection", authorize, async (req,res)=> {
    const {_name,_description,_topic,_author}=req.body;
    var query = Collection.find({name:_name, author:_author}).lean().limit(1);
    query.exec(function(err,result) {
        if(!result.length) {
            Collection.create({
                name: _name,
                description: _description,
                topic: _topic,
                author: _author,
                date: Date.now(),
                items: 0
            });
            return res.send({status: "ok"});
        } else {
            return res.send({exists:true});
        }
    });
})
router.post("/usercollections", authorize, async (req,res)=> {
    const {_author} = req.body;
    var query = Collection.find({author: _author}).lean();
    query.exec(function(err,result) {
        res.send(result);
    })
})
module.exports=router;

