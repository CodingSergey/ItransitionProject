const express = require("express");
const cors = require("cors");
const auth  = require("./routes/auth");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://alex:1234@cluster0.0nmnmgi.mongodb.net/?retryWrites=true&w=majority")

let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.listen(port, ()=>{
    console.log("Listening on port:", port);
});