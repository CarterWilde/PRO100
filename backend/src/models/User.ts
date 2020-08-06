import * as mongoose from "mongoose";
import User from "shared/ts/User";

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

export default mongoose.model<User>("User", userSchema)