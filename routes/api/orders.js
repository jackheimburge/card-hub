const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//All routes start with /api/orders

//GET api/orders/cart
router.get('/cart', ordersCtrl.cart);

//POST api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);


module.exports = router;