import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import pages from './routes/pages.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", pages);

mongoose
    .connect(process.env.ATLAS_URI, { useNewUrlParser: true })
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

export default app; 