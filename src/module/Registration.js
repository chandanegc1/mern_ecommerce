const mongoose = require("mongoose");
const registerschema = mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    }, 
    password:{
        type:String 
    },
});
const Register = mongoose.model("Register" , registerschema);
module.exports = Register;
