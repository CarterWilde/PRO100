import {Response, NextFunction} from "express";
import {ERequestType} from "./ERequestType";
import UserRequest from "shared/UserRequest"

export default interface Route {
    url: string;
    type: ERequestType;
    handler: (req: UserRequest, res: Response, next?: NextFunction) => any;
    callback?: (req: UserRequest, res: Response, ...args: any[]) => any;
}