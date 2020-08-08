import express from "express";

import {ERequestType} from "./ts/ERequestType";
import Route from "./ts/Route";

import Post from "./models/Post";
import User from "./models/User";

export const Routes: Route[] = [
    {
        url: "/",
        type: ERequestType.GET,
        handler: (req: express.Request, res: express.Response) => {
            res.redirect('/posts');
        }
    },
    {
        url: "/posts",
        type: ERequestType.GET,
        handler: async (req: express.Request, res: express.Response) => {
            const posts = await Post.find().populate('posts')
            res.json(posts)
        }
    },
    {
        url: "/post",
        type: ERequestType.GET,
        handler: (req: express.Request, res: express.Response) => {
            res.send("post");
        }
    },
    {
        url: "/user",
        type: ERequestType.GET,
        handler: async (req: express.Request, res: express.Response) => {
            const user = await User.find().populate('user')
            res.json(user)
        }
    },
    {
        url: "/post",
        type: ERequestType.POST,
        handler: (req: express.Request, res: express.Response) => {
            Post.create(JSON.parse(req.headers['post-object'] as string));
            res.redirect("/posts");
        }
    },
    {
        url: "/user",
        type: ERequestType.POST,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
        }
    },
    {
        url: "/post",
        type: ERequestType.PUT,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
        }
    },
    {
        url: "/user",
        type: ERequestType.PUT,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
        }
    },
    {
        url: "/post",
        type: ERequestType.DELETE,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
        }
    },
    {
        url: "/user",
        type: ERequestType.DELETE,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
        }
    }
]