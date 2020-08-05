const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   username:{
       type:String
   },
   email:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   }
})

mongoose.model("USER", userSchema)