const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=()=>{
   return mongoose.connect(`mongodb://127.0.0.1:27017/backend`);
}

module.exports=connectDB;