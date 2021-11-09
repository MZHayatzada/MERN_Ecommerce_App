const express = require('express');
const app = express();
const User = require('./schema')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json());
dotenv.config()
    //Working on bacnkend branch
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
    const { email, password } = req.body.user;
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