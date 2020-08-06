import * as mongoose from "mongoose";
import Post from "../../../shared/ts/Post";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    posted_by:{
        type:mongoose.Schema.Types.Buffer,
        ref:"User"
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Buffer
    },
    content:{
        type:String
    },
    votes:{
        total:{
            type:Number,
            required:true
        },
        up:{
            users: [{type:mongoose.Schema.Types.Buffer, ref: "User"}]
        },
        down:{
            users: [{type:mongoose.Schema.Types.Buffer, ref: "User"}]
        }
    }
})

export default mongoose.model<Post>("Post", postSchema)