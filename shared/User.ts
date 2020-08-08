import * as mongoose from "mongoose";
import {prop, Typegoose } from 'typegoose';

export default class User extends Typegoose {
    @prop({required: true})
    public Username: string;
    @prop({required: true})
    public Email: string;
    @prop({required: true})
    private Password: string;
}

export const UserModel = new User().getModelForClass(User);