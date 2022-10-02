const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send({status:"cock"});
})

module.exports = router;