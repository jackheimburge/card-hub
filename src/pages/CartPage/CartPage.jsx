import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './CartPage.css';

export default function CartPage({ setCart, cart, allCards }) {
    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            console.log(cart)
            setCart(allCards.filter((card) => cart.cards.includes(card._id)));
        }
        getCart();
    }, [setCart]);

    return (
        (Array.isArray(cart) && cart.length > 0) ? (
            cart.map((card, idx) => <p key={idx}>{card.player} ${card.price}</p>)
        ) : <h1>Cart is Empty</h1>
    );
}