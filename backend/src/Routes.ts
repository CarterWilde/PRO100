import passport from "passport";

import { ERequestType } from "./ts/ERequestType";
import Route from "./ts/Route";

import Post from "./models/Post";
import User from "./models/User";

import { localStrategy } from "./Strategies";

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
            const user = await User.find().populate('user')
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
            res.redirect('/posts')
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