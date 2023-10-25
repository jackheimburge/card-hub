import { useState, useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import '@splidejs/react-splide/css'
import './CardDetailPage.css';
import SellerInfo from '../../components/SellerInfoCard/SellerInfoCard';
import CardDetailItem from '../../components/CardDetailItem/CardDetailItem';

export default function CardDetailPage({ user, setAllCards, allCards }) {
    const [card, setCard] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getCard() {
            const returnedCard = await cardsAPI.getCard(id);
            setCard(returnedCard);
        }
        getCard();
    }, [id]);

    return (
        <div className='CardDetailPage'>
            {card ? (
                <>
                    <Carousel card={card} />
                    <CardDetailItem user={user} setAllCards={setAllCards} allCards={allCards} card={card} />
                    <SellerInfo user={user} card={card} />
                </>
            ) : (<h1 className="d-flex">Loading...</h1>)
            }
        </div >
    );
}