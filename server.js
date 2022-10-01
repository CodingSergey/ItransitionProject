const express = require("express");
const cors = require("cors");
let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    console.log("requested");
    res.send({status:"cock"});
})
 
app.listen(port, ()=>{
    console.log("Listening on port:", port);
});