import * as mongoose from "mongoose";
import User from "shared/User";

export const UserSchema = new mongoose.Schema({
    Username: {
        type: String
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})
export default mongoose.model<User>("User", UserSchema)