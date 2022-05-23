import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import pages from './routes/pages.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", pages);

const connectToMongo = async () => {
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
    })
    
    return mongoose;
}

mongoose.Promise = global.Promise;

connectToMongo()
    .then(() => console.log("Successfully connected to the Mongo Database Atlas!"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server established, listening on port ${port}`);
})

export default app;
