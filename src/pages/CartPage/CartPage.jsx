import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import CartItem from '../../components/CartItem/CartItem';
import CheckoutBtn from '../../components/CheckoutBtn/CheckoutBtn';
import './CartPage.css';

export default function CartPage({ setCart, cart, allCards }) {

    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            const cartItems = allCards.filter((card) => cart.cards.includes(card._id));
            setCart(cartItems)
        }
        getCart();
    }, [setCart, allCards]);

    async function handleCheckout() {
        await ordersAPI.checkout();
    }

    return (
        <div>
            {(Array.isArray(cart) && cart.length > 0) ? (
                cart.map((card) => <CartItem key={card._id} card={card} />)
            ) : <h1>Cart is Empty</h1>}
            <CheckoutBtn handleCheckout={handleCheckout} />
        </div>
    );
}