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
orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        // query object
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    );
};
module.exports = mongoose.model('Order', orderSchema);