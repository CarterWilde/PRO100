import passport from "passport";
import { MongoError } from "mongodb"
import { MessageBarType } from '@fluentui/react';

import { ERequestType } from "./ts/ERequestType";
import Route from "./ts/Route";

import Post from "./models/Post";
import * as UserModel from "./models/User";

import { localStrategy } from "./Strategies";
import User from "./shared/User";
import AuthUser from "./shared/AuthorizationUser";
import AuthenicatedUser from "./shared/AuthenicatedUser";
import Status from "./shared/Status";

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
            Post.create(JSON.parse(req.headers['post-object'] as string));
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
            const user: User = new User(req.user.Email, req.user.Username);
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
            UserModel.default.create(user).then(result => {
                console.log(`Added User ${user.Email}`);
            })
                .catch((err: MongoError) => {
                    if (err.code === 11000) {
                        res.json({ "error": { "type": "EmailTaken", "Email": user.Email }, "message": "That email is already taken!" })
                    } else {
                        console.error('Unknown Error While Creating User!')
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