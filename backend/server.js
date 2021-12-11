const express = require('express');
const app = express();
const userRouter = require('./Routers/userRouter')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json());
dotenv.config()
const products = require('./data');
const productRouter = require('./Routers/productRouter')


app.use('/products', productRouter)
app.use('/user', userRouter)



const start = () => {
    try {
        app.listen(4000, () => {
            mongoose.connect(process.env.MONGO_URI)
            console.log('connected')
            console.log('app is listening on port 4000');
        })
    } catch (error) {

    }
}
start()