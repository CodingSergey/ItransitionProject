const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema= new Schema({
    name: {type: String, required: true},
    description: {type: String, required:true},
    author:{type: String, required:true},
    topic:{type: String, required:true}
})

const Collection = model("Collection", CollectionSchema);
module.exports=Collection;