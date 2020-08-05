import express from "express";
const app: express.Application = express();
const port = 8080; // default port to listen

app.get("/", (req: express.Request, res: express.Response) => {
    res.send( "Hello world!" );
} );

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});