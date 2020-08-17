import * as mongoose from "mongoose";

export default class User extends mongoose.Document {
    public Email: string;
    public Username?: string;
    constructor(email: string, username?: string) {
        super();
        this.Email = email;
        this.Username = username;
    }
}