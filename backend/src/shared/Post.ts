import {Document, Schema} from "mongoose";
import Votes from "./Votes";
import User from "./User";

export default class Post extends Document {
    public Title: string;
    public PostBy: User;
    public Price: number;
    public Image: Schema.Types.Buffer;
    public Content: string;
    public Votes: Votes;

    constructor(title: string, postBy: User, price: number, image: Schema.Types.Buffer, content: string, votes: Votes) {
        super();
        this.Title = title;
        this.PostBy = postBy;
        this.Price = price;
        this.Image = image;
        this.Content = content;
        this.Votes = votes;
    }
}