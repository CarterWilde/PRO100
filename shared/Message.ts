import User from "./User";
import Status from "./Status";
import Failure from "./Failure";

export default class Message {
    public Status: Status;

    constructor(status: Status | Failure) {
        this.Status = status;
    }
}