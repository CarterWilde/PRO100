import passport from "passport";
import { MongoError } from "mongodb"
import { MessageBarType } from '@fluentui/react';

import { ERequestType } from "./ts/ERequestType";
import Route from "./ts/Route";

import Post from "./models/Post";
import * as UserModel from "./models/User";

import { localStrategy } from "./Strategies";
import AuthUser from "./shared/AuthorizationUser";
import AuthenicatedUser from "./shared/AuthenicatedUser";
import Status from "./shared/Status";
import Message from "./shared/Message";
import Failure from "./shared/Failure";
import { FailureCodes } from "./shared/FailureCodes";
import IdUser from "./shared/IdUser";

export const Routes: Route[] = [
    {
        url: "/",
        type: ERequestType.GET,
        handler: (req, res) => {
            res.redirect('/posts');
        }
    },
    {
        url: "/logout",
        type: ERequestType.GET,
        handler: (req, res) => {
            req.logout();
            res.redirect('/');
        }
    },
    {
        url: "/islogged",
        type: ERequestType.GET,
        handler: (req, res) => {
            if(req.isAuthenticated()) {
                const usr = req.user as IdUser;
                res.json({
                    _id: usr._id,
                    Email: usr.Email,
                    Username: usr.Username
                });
            } else {
                res.send();
            }
        }
    },
    {
        url: "/posts",
        type: ERequestType.GET,
        handler: async (req, res) => {
            const posts = await Post.find().populate('posts')
            res.json(posts)
        }
    },
    {
        url: "/post",
        type: ERequestType.GET,
        handler: (req, res) => {
            res.send("post");
        }
    },
    {
        url: "/user",
        type: ERequestType.GET,
        handler: async (req, res) => {
            const user = await UserModel.default.find().populate('user')
            res.json(user)
        }
    },
    {
        url: "/post",
        type: ERequestType.POST,
        handler: (req, res) => {
            const data = req.body;
            data.price = Number.parseFloat(data.price);
            Post.create(data);
            res.redirect("/posts");
        }
    },
    {
        url: "/user",
        type: ERequestType.POST,
        handler: (req, res) => {
            res.send("Hi");
        }
    },
    {
        url: "/login",
        type: ERequestType.POST,
        handler: passport.authenticate(localStrategy),
        callback: (req, res) => {
            res.status(200);
            const user: IdUser = new IdUser(req.user.Email, req.user.Username, req.user._id);
            req.login(user, (err) => {console.warn("Possilbe Login Fail")});
            const mes: AuthenicatedUser = new AuthenicatedUser(new Status(
                "Succesfully Logged in!",
                MessageBarType.success
            ), user);
            res.json(mes);
        }
    },
    {
        url: "/createuser",
        type: ERequestType.POST,
        handler: (req, res) => {
            const user = JSON.parse(req.headers['new-user-object'] as string) as AuthUser;
            user.Email = user.Email.toLowerCase();
            UserModel.default.create(user)
                .then(result => {
                    console.log(`Added User ${user.Email}`);
                    const mes: Message = new AuthenicatedUser(new Status("Successfuly Created User!", MessageBarType.success), { _id: user._id , Email: user.Email, Username: user.Username });
                    res.json(mes);
                })
                .catch(err => {
                    if (err instanceof MongoError) {
                        const mes: Message = new Message(new Failure(
                            "User already created!",
                            MessageBarType.error,
                            "The user provided was a duplicate!",
                            FailureCodes.UserExists
                        ));
                        res.json(mes)
                    }
                });
        }
    },
    {
        url: "/post",
        type: ERequestType.PUT,
        handler: (req, res) => {
            res.send("Hi");
        }
    },
    {
        url: "/user",
        type: ERequestType.PUT,
        handler: (req, res) => {
            res.send("Hi");
        }
    },
    {
        url: "/post",
        type: ERequestType.DELETE,
        handler: (req, res) => {
            res.send("Hi");
        }
    },
    {
        url: "/user",
        type: ERequestType.DELETE,
        handler: (req, res) => {
            res.send("Hi");
        }
    }
]