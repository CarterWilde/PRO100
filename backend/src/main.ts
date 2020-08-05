import express from "express";
const app: express.Application = express();
const port = 8080; // default port to listen
const mongoose = require('mongoose')
const cors = require('cors')
const {MONGOURL} = require('./keys')

app.get("/", (req: express.Request, res: express.Response) => {
    res.send( "Hello world!" );
} );


app.use(cors())

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

require('../models/user')
require('../models/post')


app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});