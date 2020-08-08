import User from "./User";

export default interface IVotes {
    Total: number;
    Up: User[];
    Down: User[];
}