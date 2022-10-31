const express = require("express");
const cors = require("cors");
const auth  = require("./routes/auth");
const mongoose = require("mongoose");
const collection=require("./routes/collection");
const users = require("./routes/users");
mongoose.connect("mongodb+srv://alex:1234@cluster0.0nmnmgi.mongodb.net/project?retryWrites=true&w=majority")

let port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors({origin: "https://master--beamish-travesseiro-0c405b.netlify.app",}));
app.use("/auth", auth);
app.use("/collection", collection);
app.use("/users",users);
app.listen(port, ()=>{
    console.log("Listening on port:", port);
});
