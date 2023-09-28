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
const Cart = mongoose.model("Cart" , registerschema);
module.exports = Cart;
