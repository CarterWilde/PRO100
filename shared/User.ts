import * as mongoose from "mongoose";

export default class User extends mongoose.Document {
    public Username: string;
    public Email: string;
    public Password: string;

    constructor(email:string, password: string, username?: string) {
        super()
        this.Username = username;
        this.Email = email;
        this.Password = password;
    }
}