import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from "./Configuration"

const app: express.Application = express();
const port: number = 8080; // default port to listen


app.use(cors({credentials: true, origin: 'http://localhost:8081'}));
app.use(bodyParser.json());

const con = new config(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});