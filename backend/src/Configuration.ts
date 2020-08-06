import mongoose from "mongoose";
import express from "express";

import { MONGOURL } from "./keys";
import { Routes } from "./routes";

import Route from "./ts/Route";
import { ERequestType } from "./ts/ERequestType";

export default class Configuration {
    dbURL: string = MONGOURL;
    app: express.Application;
    constructor(instance: express.Application) {
        this.app = instance;
        this.configureRoutes(Routes);
        this.connectToMongoose();
    }

    private prop(obj: any, key: string) {
        return obj[key].bind(obj);
    }

    private configureRoutes(routes: Route[]): void {
        routes.forEach(route => { this.prop(this.app, ERequestType[route.type.valueOf()].toLowerCase())(route.url, route.handler)});
        // routes.forEach(route => { eval(`this.app.${ERequestType[route.type.valueOf()].toLowerCase()}(route.url, route.handler)`)});
    }

    public connectToMongoose(dburl?: string): void {
        try {
            this.dbURL = (dburl || MONGOURL);
            mongoose.connect(this.dbURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        } catch (err) {
            console.log('error connecting to mongoDB', err)
        }
        mongoose.connection.on('connected', () => {
            console.log('connected to mongoDB')
        })
    }
}