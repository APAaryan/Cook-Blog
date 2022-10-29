import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}


const port=process.env.PORT || 8000;

app.listen(port, ()=>console.log(`Hello server is running on port ${port}`));

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;



const URL=process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-pa6ualv-shard-00-00.yq8cimg.mongodb.net:27017,ac-pa6ualv-shard-00-01.yq8cimg.mongodb.net:27017,ac-pa6ualv-shard-00-02.yq8cimg.mongodb.net:27017/?ssl=true&replicaSet=atlas-p7pgdx-shard-0&authSource=admin&retryWrites=true&w=majority`;

connection(URL);



