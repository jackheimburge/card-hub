const Order = require('../../models/order');

module.exports = {
    addToCart,
    cart
}

async function addToCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        await cart.addCardToCart(req.params._id);
        res.json({ message: 'Card added to cart successfully' });
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
