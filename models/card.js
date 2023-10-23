const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    player: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
    image: {
        type: String, //Array of image URL's stored in AWS
    },
    category: {
        type: String,
        enum: ['Basketball', 'Baseball', 'Football', 'Soccer', 'Other']
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Card', cardSchema);