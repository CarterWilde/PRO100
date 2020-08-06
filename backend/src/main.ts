import express from "express";
import mongoose from "mongoose";


import {MONGOURL} from "./keys";

import User from "./models/User";
import Post from "./models/Post";


const app: express.Application = express();
import cors from "cors";
const port: number = 8080; // default port to listen

app.get("/", (req: express.Request, res: express.Response) => {
    res.send( "Hello world!" );
});

app.use(cors());

try {
    mongoose.connect(MONGOURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
} catch (err) {
    console.log('error connecting to mongoDB', err)
}
mongoose.connection.on('connected',()=>{
    console.log('connected to mongoDB')
})


app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});