const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    longDescription: { type: String, required: true },
    reviews: [{
        reviewer: { type: String, require: true },
        review: { type: String },
        rating: { type: Number }
    }]
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product;