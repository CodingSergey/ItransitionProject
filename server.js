const express = require("express");
const cors = require("cors");
const auth  = require("./routes/auth");
const mongoose = require("mongoose");
const collection=require("./routes/collection");
mongoose.connect("mongodb+srv://alex:1234@cluster0.0nmnmgi.mongodb.net/project?retryWrites=true&w=majority")

let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors({origin: "https://itransitionproject.vercel.app"}));
app.use("/auth", auth);
app.use("/collection", collection);
app.listen(port, ()=>{
    console.log("Listening on port:", port);
});

