import { useState, useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import * as ordersAPI from '../../utilities/orders-api';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import './CardDetailPage.css';
import SellerInfoCard from '../../components/SellerInfoCard/SellerInfoCard';
import CardDetailItem from '../../components/CardDetailItem/CardDetailItem';

export default function CardDetailPage({ user, setAllCards, allCards }) {
    const [card, setCard] = useState(null);
    const [cart, setCart] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getCard() {
            const returnedCard = await cardsAPI.getCard(id);
            setCard(returnedCard);
        }
        getCard();
    }, [id]);

    async function handleAddToCart(cardId) {
        const updatedCart = await ordersAPI.addCardToCart(cardId);
        setCart(updatedCart);
    }


    return (
        <div className='CardDetailPage'>
            {card ? (
                <>
                    <Carousel card={card} />
                    <CardDetailItem user={user} setAllCards={setAllCards} allCards={allCards} card={card} handleAddToCart={handleAddToCart} />
                    <SellerInfoCard user={user} card={card} />
                </>
            ) : (<h1 className="d-flex">Loading...</h1>)
            }
        </div >
    );
}