const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    player: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
    images: {
        type: [String], //Array of image URL's stored in AWS
        required: true
    },
    category: {
        type: String,
        enum: ['Basketball', 'Baseball', 'Football', 'Soccer', 'Other']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Card', cardSchema);