import { useState, useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
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
    }, [id]);
    return (
        <div className='CardDetailPage'>
            {card ? (
                <div className='carousel'>
                    <Splide aria-label="My Favorite Images">
                        {card.images.map((image, idx) => <SplideSlide>
                            <img key={idx} src={image} alt={`${idx + 1}`} />
                        </SplideSlide>)}
                    </Splide>
                </div>
            ) : (<p>Loading...</p>)
            }
        </div>
    );
}