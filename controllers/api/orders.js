const Order = require('../../models/order');

module.exports = {
    addToCart,
    cart,
    checkout,
    removeFromCart
}

async function addToCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        await cart.addCardToCart(req.params.id);
        console.log(req.params.id)
        res.json(cart);
    } catch (error) {
        console.error('Error adding card to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function cart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        res.json(cart);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function checkout(req, res) {
    try {
        const cart = await Order.getCart(req.user._id)
        cart.checkout();
        res.json({ message: 'Your Purchase Was Successful!' })

    } catch (error) {
        console.error('Error checking out', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

async function removeFromCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        const cardIdx = cart.cards.indexOf(req.params.id);
        cart.cards.splice(cardIdx, 1)
        await cart.save();
        res.json(cart);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }

}