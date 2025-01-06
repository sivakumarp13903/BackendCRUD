import router from './routes/bookRoute.js'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'


const app = express();

app.use(bodyParser.json())
app.use('/api/books',router)

dotenv.config();

const PORT = process.env.PORT || 3003

const MongoURL = process.env.MONGO_URL || "itnbitnrosib"

mongoose
    .connect(MongoURL)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`Server is Running On PORT https://localhost/${PORT}`);            
        })
    })