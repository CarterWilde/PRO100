import * as mongoose from "mongoose";
import User from "shared/User";

export const UserSchema = new mongoose.Schema({
    Username: {
        type: String
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: any):any => {
                return Model.find({Email: value as string}).exec((err, users) => {
                    if(err) console.error(err);
                    return users.length === 0;
                });
            }
        }
    },
    Password: {
        type: String,
        required: true
    }
})

const Model = mongoose.model<User>("User", UserSchema)

export default Model;