import Message from "./Message";
import User from "./User";
import Status from "./Status";

export default class AuthenicatedUser extends Message {
    public User?: User;

    constructor(status: Status, user: User) {
        super(status);
        this.User = user;
    }

}