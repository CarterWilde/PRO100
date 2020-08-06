import express from "express";
import cors from "cors";

import config from "./Configuration"

const app: express.Application = express();
const router: express.Router = express.Router();
const port: number = 8080; // default port to listen

app.use(cors());
const con = new config(app);


app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});