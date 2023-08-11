import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json( {extended:true}))
app.use('/',Router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})

DefaultData();