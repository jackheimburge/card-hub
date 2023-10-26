import { useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './CartPage.css';

export default function CartPage() {
    const [cart, setCart] = useState(null);

    async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
    }

    return (
        <h1>MY CART</h1>
    );
}