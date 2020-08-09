import {Request, Response, NextFunction} from "express";
import {ERequestType} from "./ERequestType";

export default interface Route {
    url: string;
    type: ERequestType;
    handler: (req: Request, res: Response, next?: NextFunction) => any;
    // TODO: Add user object to request type
    callback?: (req: Request, res: Response, ...args: any[]) => any;
}