import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import CheckoutBtn from '../../components/CheckoutBtn/CheckoutBtn';
import { Link } from 'react-router-dom';
import CardListItem from '../../components/CardListItem/CardListItem';
import './CartPage.css';

export default function CartPage({ setCart, cart, allCards }) {
    const [checkoutMessage, setCheckoutMessage] = useState(null);
    const [total, setTotal] = useState(0);
    const [isPaid, setIsPaid] = useState(false);
    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setTotal(cart.total);
            setIsPaid(cart.isPaid);
            const cartItems = allCards.filter((card) => cart.cards.includes(card._id));
            setCart(cartItems);
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
        <div className='CartPage row'>
            {Array.isArray(cart) && cart.length > 0 ? (
                <>
                    {cart.map((card) => (
                        <div key={card._id} className='col-4'>
                            <CardListItem card={card} />
                        </div>
                    ))}
                    <div>
                        <CheckoutBtn handleCheckout={handleCheckout} cart={cart} total={total} isPaid={isPaid} />
                    </div>
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
