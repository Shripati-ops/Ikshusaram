import express,{Application} from 'express';
import authRouter from './controllers/auth';
import cors from "cors";
import connection from './db/connection';
import mongoose from "mongoose";
const app: Application = express();

connection();
app.use(express.urlencoded())
app.use(express.json());
app.use(cors({'origin' : '*'}))
app.use('/auth', authRouter);
app.listen(5000, () => {
    console.log("App Running on port 5000");
})