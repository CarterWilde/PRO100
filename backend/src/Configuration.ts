import mongoose from "mongoose";
import {Application} from "express";
import passport from "passport";
import flash from "connect-flash";
import session from "express-session";

import { MONGOURL, SESSION } from "./keys";
import { Routes } from "./Routes";
import {localStrategy} from "./Strategies"

import Route from "./ts/Route";
import { ERequestType } from "./ts/ERequestType";
import Post from "./models/Post";
import User from "./models/User";

import * as AuthUser from "./shared/AuthorizationUser";

export default class Configuration {
    dbURL: string = MONGOURL;
    app: Application;
    constructor(instance: Application) {
        this.app = instance;
        this.connectToMongoose();
        this.passportConfiguration();
        this.configureRoutes(Routes);
    }

    private prop(obj: any, key: string) {
        return obj[key].bind(obj);
    }

    private configureRoutes(routes: Route[]): void {
        routes.forEach(route => { this.prop(this.app, ERequestType[route.type.valueOf()].toLowerCase())(route.url, route.handler, route.callback? route.callback: () => {/**/})});
        // routes.forEach(route => { eval(`this.app.${ERequestType[route.type.valueOf()].toLowerCase()}(route.url, route.handler)`)});
    }

    public passportConfiguration(): void {
        this.app.use(flash());
        this.app.use(session({ secret: SESSION, resave:true, saveUninitialized:false }))

        this.app.use(passport.initialize());
        this.app.use(passport.session());

        passport.use(localStrategy);

        passport.serializeUser((user: AuthUser.default, done) => {
            done(null, user._id);
        });

        passport.deserializeUser(async (id, done) => {
            User.findById(id, (err, user) => {
                done(err, user);
            });
        });
    }

    public connectToMongoose(dburl?: string): void {
        try {
            this.dbURL = (dburl || MONGOURL);
            mongoose.connect(this.dbURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            mongoose.set('useCreateIndex', true)
        } catch (err) {
            console.log('error connecting to mongoDB', err)
        }
        mongoose.connection.on('connected', async () => {
            try {
                await Post.createCollection();
            } catch (error) {
                console.warn("Post Collection Already Created")
            }
            try {
                await User.createCollection();
            } catch (error) {
                console.warn("Post Collection Already Created")
            }
            console.log('connected to mongoDB')
        })
    }
}