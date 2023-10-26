import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';

export default function CartPage({ setCart, cart, allCards }) {
    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            console.log('before', cart)
            const cartItems = allCards.filter((card) => cart.cards.includes(card._id));
            setCart(cartItems)
            console.log('after', cartItems);
        }
        getCart();
    }, [setCart, allCards]);

    return (
        (Array.isArray(cart) && cart.length > 0) ? (
            cart.map((card) => <CartItem key={card._id} card={card} />)
        ) : <h1>Cart is Empty</h1>
    );
}