import {prop, Ref} from 'typegoose';

import User from "./User";

export default class IVotes{
    @prop({required: true})
    public Total: number;
    @prop({ref: User, required: true})
    public Up: Ref<User>[];
    @prop({ref: User, required: true})
    public Down: Ref<User>[];
}