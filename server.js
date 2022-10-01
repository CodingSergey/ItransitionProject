const express = require("express");

let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    console.log("requested");
    res.send({status:"ok"});
})

app.listen(port);