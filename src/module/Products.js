const mongoose = require("mongoose");
const registerschema = mongoose.Schema({
    name:{
        type:String,
    },
    img:{
        type:String,
    },
    brand:{
        type:String,
    }, 
    price:{
        type:Number 
    },
});
const Products = mongoose.model("Products" , registerschema);
module.exports = Products;
