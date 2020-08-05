import * as mongoose from "mongoose";
import IVotes from "./IVotes";
import User from "./User";

export default class Post extends mongoose.Document {
    public Title: String;
    public PostBy: User;
    public Price: Number;
    public Image: mongoose.Schema.Types.Buffer;
    public Content: String;
    public Votes: IVotes;
}