const mongoose = require('mongoose')
const productsModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },

    description: {
        type: String
    },

    price: {
        type: Number
    },

    discountPercentage: {
        type: Number
    },

    rating: {
        type: Number
    },

    stock: {
        type: Number
    },

    brand: {
        type: String
    },

    category: {
        type: String
    },

    thumbnail: {
        type: String
    },

    images: {
        type: [String]
    }
})

const Product = mongoose.model('products', productsModelSchema)

module.exports = Product