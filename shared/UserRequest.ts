import {Request} from "express";
import AuthUser from "./AuthorizationUser";

export default interface UserRequest extends Request {
    user?: AuthUser;
}