const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    });

orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        // query object
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    );
};

orderSchema.methods.addCardToCart = async function (cardId) {
    const cart = this;
    cart.cards.push(cardId);
    return cart.save();
}

orderSchema.methods.checkout = async function () {
    const cart = this;
    const Card = mongoose.model('Card');
    cart.isPaid = true;
    await cart.save();

    for (const cardId of cart.cards) {
        const card = await Card.findById(cardId);
        card.isSold = true;
        await card.save()
    }
}


module.exports = mongoose.model('Order', orderSchema);