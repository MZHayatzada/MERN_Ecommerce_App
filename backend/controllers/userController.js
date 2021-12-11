const asyncHandler = require('express-async-handler')
const User = require('../database/userModel')

const signupUser = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body.user;
    const newUser = await User.create({
        username,
        email,
        password
    })
    res.status(201).json({
        newUser
    })
})

const loginUser = asyncHandler(async(req, res) => {
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

module.exports = { signupUser, loginUser }