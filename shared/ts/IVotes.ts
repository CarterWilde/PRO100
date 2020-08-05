import User from "./User";

export default interface IVotes {
    Total: Number;
    Up: Array<User>;
    Dow: Array<User>;
}