const asyncHandler = require('express-async-handler')
const User = require('../database/userModel')
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils');
const signupUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const newUser = await User.create({
        email,
        password
    })
    res.status(201).json({
        newUser
    })
})

const loginUser = asyncHandler(async(req, res) => {
    ``
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const findUser = await User.findOne({ email, password });
        if (findUser) {
            // if (bcrypt.compareSync(password), findUser.password) {
            res.status(200).json({
                _id: findUser._id,
                name: findUser.name,
                email: findUser.email,
                isAdmin: findUser.isAdmin,
                token: generateToken(findUser)
            });
            return

            // }


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