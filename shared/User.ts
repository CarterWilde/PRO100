import * as mongoose from "mongoose";

export default class User extends mongoose.Document {
    public Username: string;
    public Email: string;
    private Password: string;
}