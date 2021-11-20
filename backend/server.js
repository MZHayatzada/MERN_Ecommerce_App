const express = require('express');
const app = express();
const User = require('./schema')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json());
dotenv.config()
const Product = require('./database/productModel');
const products = require('./data');
//Working on bacnkend branch

app.post('/products', async(req, res) => {
    try {
        await Product.deleteMany({})
        await Product.create(products)
        res.status(201).json({ msg: 'data added' })
    } catch (error) {
        console.log(error);
    }
})

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