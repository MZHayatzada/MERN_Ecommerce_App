const express = require('express');
const app = express();
const User = require('./database/userModel')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const asyncHandler = require('express-async-handler')
app.use(express.json());
dotenv.config()
const Product = require('./database/productModel');
const products = require('./data');
//Working on bacnkend branch


//Login / Register endpoints

app.post('/register', async(req, res) => {
    const { username, email, password } = req.body.user;
    console.log(username, email, password);
    const newUser = await User.create({
        username,
        email,
        password
    })
    res.status(201).json({
        newUser
    })
})

app.post('/login', async(req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email, password });
        if (findUser) {
            res.status(200).json({
                username: findUser.username
            })
        } else {
            res.status(404).json({
                error: 'User did not found'
            })
        }
    } catch (error) {
        throw new Error('Error')
    }
})


//Products endpoints 

app.post('/products', asyncHandler(async(req, res) => {

    await Product.deleteMany({})
    await Product.insertMany(products)
    res.status(201).json({ msg: 'data added' })

}))


app.get('/products', asyncHandler(async(req, res) => {

    const products = await Product.find();
    res.status(200).json(products);
    if (!products) {
        throw new Error('Data did not found!')
    }
}))


app.get('/products/:id', asyncHandler(async(req, res) => {
    const productId = parseInt(req.params.id);
    const singleProduct = await Product.findOne({ id: productId });
    if (!singleProduct) {
        res.status(404).json({ msg: "Product did not found" });
    }
    res.status(200).json({ singleProduct });
}))


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