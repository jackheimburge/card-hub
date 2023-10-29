import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import CartItem from '../../components/CartItem/CartItem';
import CheckoutBtn from '../../components/CheckoutBtn/CheckoutBtn';
import { Link } from 'react-router-dom';
import CardListItem from '../../components/CardListItem/CardListItem';
import './CartPage.css';

export default function CartPage({ setCart, cart, allCards }) {
    const [checkoutMessage, setCheckoutMessage] = useState(null);

    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            const cartItems = allCards.filter((card) => cart.cards.includes(card._id));
            setCart(cartItems)
        }
        getCart();
    }, [setCart, allCards]);

    async function handleCheckout() {
        try {
            const checkoutMsg = await ordersAPI.checkout();
            setCart(null);
            setCheckoutMessage(checkoutMsg);
        } catch (error) {
            setCheckoutMessage('Checkout failed. Try Again.')
        }

    }

    return (
        <div className='CartPage'>
            {Array.isArray(cart) && cart.length > 0 ? (
                <>
                    {cart.map((card) => (
                        <div key={card._id}>
                            <CardListItem card={card} />
                        </div>
                    ))}
                    <CheckoutBtn handleCheckout={handleCheckout} />
                </>
            ) : (
                <div>
                    <h1>You don't have any items in your cart</h1>
                    <Link to="/"><button className='btn btn-primary'>Browse Cards!</button></Link>
                </div>
            )}

            {checkoutMessage && <p>{checkoutMessage.message}</p>}
        </div>
    );
}
