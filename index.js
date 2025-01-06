import route from './routes/userRoute.js'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/user',route)
dotenv.config()
const PORT = process.env.PORT || 3002
const MongoURL = process.env.MONGO_URL 

mongoose   
    .connect(MongoURL)
    .then(() => {
        console.log("MongoDB Connected");    
        app.listen(PORT, () => {
            console.log(`Server Running on PORT ${PORT}`);
            
        })    
    })