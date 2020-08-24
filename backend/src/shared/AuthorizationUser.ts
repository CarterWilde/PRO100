import User, {UserDocument} from "./User"
import { Schema } from "mongoose";
import IdUser from "./IdUser";

export default class AuthorizationUser extends IdUser {
    public Password: string;

    constructor(email:string, password: string, username?: string) {
        super(email, username)
        this.Password = password;
    }
}

export class AuthorizationUserDocument extends UserDocument implements AuthorizationUser{
    public Password: string;
    constructor(email: string, pass: string, user?: string) {
        super(email, user);
        this.Password = pass;
    }
}