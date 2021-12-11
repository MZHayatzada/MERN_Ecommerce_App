const Product = require('../database/productModel');
const asyncHandler = require('express-async-handler')

const getAllProducts = asyncHandler(async(req, res) => {

    const products = await Product.find();
    res.status(200).json(products);
    if (!products) {
        throw new Error('Data did not found!')
    }
})
const getSingleProduct = asyncHandler(async(req, res) => {
    const productId = parseInt(req.params.id);
    const singleProduct = await Product.findOne({ id: productId });
    if (!singleProduct) {
        res.status(404).json({ msg: "Product did not found" });
    }
    res.status(200).json({ singleProduct });
})

const addProdcut = asyncHandler(async(req, res) => {

    await Product.deleteMany({})
    await Product.insertMany(products)
    res.status(201).json({ msg: 'data added' })

})
module.exports = { getAllProducts, getSingleProduct, addProdcut }