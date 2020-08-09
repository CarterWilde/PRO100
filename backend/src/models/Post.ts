import * as mongoose from "mongoose";

import Post from "shared/Post";
import { UserSchema } from "./User";

export const postSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    PostedBy: {
        type: UserSchema,
        ref: "User",
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Image: {
        type: Buffer
    },
    Content: {
        type: String
    },
    Votes: {
        Total: {
            type: Number,
            required: true
        },
        Up: [{ type: UserSchema, ref: "User", required: true }],
        Down: [{ type: UserSchema, ref: "User", required: true }]
    }
})

export default mongoose.model<Post>("Post", postSchema)