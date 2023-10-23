const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = require('./card')

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Order', orderSchema);