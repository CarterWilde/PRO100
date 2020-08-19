import {Document} from "mongoose";

export default class User {
    public Email: string;
    public Username?: string;
    constructor(email: string, username?: string) {
        this.Email = email;
        this.Username = username;
    }
}

export class UserDocument extends Document implements User{
    public Email: string;
    public Username?: string;
    constructor(email: string, user: string) {
        super();
        this.Email = email;
        this.Username = user;
    }
}