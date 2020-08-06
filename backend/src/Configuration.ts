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

    private configureRoutes(routes: Route[]): void {
        // tslint:disable:no-eval
        routes.forEach(route => { eval(`this.app.${ERequestType[route.type.valueOf()].toLowerCase()}(route.url, route.handler)`)});
        // tslint:enable:no-eval
    }

    // private setupRoutes(routes: Route[], type: ERequestType): void {
    //     console.log("Hello: " + typeof(type));
    //     switch (type) {
    //         case ERequestType.PUT:
    //             routes.forEach(route => { this.app.put(route.url, route.handler); });
    //             break;
    //         case ERequestType.POST :
    //             routes.forEach(route => { this.app.post(route.url, route.handler); });
    //             break;
    //         case ERequestType.DELETE:
    //             routes.forEach(route => { this.app.delete(route.url, route.handler); });
    //             break;
    //         case ERequestType.GET:
    //         default:
    //             routes.forEach(route => { this.app.get(route.url, route.handler); });
    //             break;
    //     }
    // }

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