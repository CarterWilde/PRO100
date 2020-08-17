import User from "./User"

export default class AuthorizationUser extends User {
    public Password: string;

    constructor(email:string, password: string, username?: string) {
        super(email, username)
        this.Password = password;
    }
}