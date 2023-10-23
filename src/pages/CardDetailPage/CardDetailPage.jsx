import { useState, useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import { useParams } from 'react-router-dom';
import './CardDetailPage.css';

export default function CardDetailPage() {
    const [card, setCard] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getCard() {
            const returnedCard = await cardsAPI.getCard(id);
            setCard(returnedCard);
        }
        getCard();
    }, []);
    return (
        <div className='CardDetailPage'>
            {card ? (
                <>
                    <h1>The card is {card.player}</h1>
                    <img src={card.images[0]} alt="" />
                </>
            ) : (<p>Loading...</p>)
            }
        </div>
    );
}