import * as mongoose from "mongoose";
import Votes from "./Votes";
import User from "./User";

export default class Post extends mongoose.Document {
    public Title: string;
    public PostBy: User;
    public Price: number;
    public Image: mongoose.Schema.Types.Buffer;
    public Content: string;
    public Votes: Votes;
}