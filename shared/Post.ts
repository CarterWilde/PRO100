import * as mongoose from "mongoose";
import {prop, Typegoose, Ref} from 'typegoose';
import Votes from "./Votes";
import User from "./User";

export default class Post extends Typegoose{
    @prop({required: true})
    public Title: string;
    @prop({required: true, ref: User})
    public PostBy: Ref<User>;
    @prop({required: true})
    public Price: number;
    @prop()
    public Image: mongoose.Schema.Types.Buffer;
    @prop()
    public Content: string;
    @prop({required: true})
    public Votes: Votes;
}
export const PostModel = new Post().getModelForClass(Post);