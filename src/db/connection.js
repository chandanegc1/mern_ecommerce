const mongoose = require("mongoose");
require('dotenv').config();
const main = async ()=>{
    mongoose.connect(process.env.MONG_URL ,({
        useNewUrlParser:true,
        useUnifiedTopology:true
    }))
}
main().then(()=>{})
.catch((e)=>{})
