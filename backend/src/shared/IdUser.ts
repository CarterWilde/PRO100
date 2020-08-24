import User, {UserDocument} from "./User"
import { Schema } from "mongoose";

export default class IdUser extends User {
    public _id: Schema.Types.ObjectId;

    constructor(email:string, username?: string, id?: Schema.Types.ObjectId) {
        super(email, username)
        this._id = id;
    }
}

export class AuthorizationUserDocument extends UserDocument implements IdUser{
    constructor(email: string, user?: string, id?: Schema.Types.ObjectId) {
        super(email, user);
        this._id = id;
    }
}