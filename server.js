const express = require("express");
const cors = require("cors");
const auth  = require("/ItransitionProject/routes/auth");
let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", auth);
app.listen(port, ()=>{
    console.log("Listening on port:", port);
});