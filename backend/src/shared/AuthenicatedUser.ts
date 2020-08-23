import Message from "./Message";
import Status from "./Status";
import IdUser from "./IdUser";

export default class AuthenicatedUser extends Message {
    public User?: IdUser;

    constructor(status: Status, user: IdUser) {
        super(status);
        this.User = user;
    }

}