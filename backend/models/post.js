const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    posted_by:{
        type:ObjectId,
        ref:"USER"
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
            users: [{type:ObjectId, ref: "USER"}]
        },
        down:{
            users: [{type:ObjectId, ref: "USER"}]
        }
    }
})

mongoose.model("POST", postSchema)