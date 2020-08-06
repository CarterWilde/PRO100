import express from "express";
import { ERequestType } from "./ts/ERequestType";
import Route from "./ts/Route";

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
        handler: (req: express.Request, res: express.Response) => {
            res.json([
                {
                    "title": "How to Survive a Plague",
                    "posted_by": {
                        "$oid": "5f2c4880fc13ae6ec2000000"
                    },
                    "price": "$5.11",
                    "image": null,
                    "content": "Lotstring"
                },
                {
                    "title": "Funny Games U.S.",
                    "posted_by": {
                        "$oid": "5f2c4880fc13ae6ec2000001"
                    },
                    "price": "$0.97",
                    "image": null,
                    "content": "Namfix"
                },
                {
                    "title": "Breakin' All the Rules",
                    "posted_by": {
                        "$oid": "5f2c4880fc13ae6ec2000002"
                    },
                    "price": "$2.66",
                    "image": null,
                    "content": "Biodex"
                },
                {
                    "title": "King Ralph",
                    "posted_by": {
                        "$oid": "5f2c4880fc13ae6ec2000003"
                    },
                    "price": "$9.11",
                    "image": null,
                    "content": "Flexidy"
                },
                {
                    "title": "Crash Reel, The",
                    "posted_by": {
                        "$oid": "5f2c4880fc13ae6ec2000004"
                    },
                    "price": "$5.65",
                    "image": null,
                    "content": "Bytecard"
                }
            ]);
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
        handler: (req: express.Request, res: express.Response) => {
            res.json({"username":"epasfield0","email":"kjanuary0@gmpg.org","password":"jgitIdU9xlVY"});
        }
    },
    {
        url: "/post",
        type: ERequestType.POST,
        handler: (req: express.Request, res: express.Response) => {
            res.send("Hi");
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