const mongoose = require("mongoose");
require('dotenv').config();
const main = async ()=>{
    mongoose.connect(process.env.MONG_URL ,({
        useNewUrlParser:true,
        useUnifiedTopology:true
    }))
}
main().then(()=>{
    console.log("server created to mongodb");
})
.catch((e)=>{
    console.log("server not created to mongodb");
})
