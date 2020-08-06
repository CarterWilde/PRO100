import express from "express";
import {ERequestType} from "./ERequestType";

export default interface Route {
    url: string;
    type: ERequestType;
    handler: (req: express.Request, res: express.Response) => void;
}