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
                <>
                    <div className='carousel'>
                        <Splide aria-label="My Favorite Images">
                            {card.images.map((image, idx) => <SplideSlide>
                                <img key={idx} src={image} alt={`${idx + 1}`} />
                            </SplideSlide>)}
                        </Splide>
                    </div>
                    <div className="card-info">
                        <h1>{card.player}</h1>
                        <hr />
                        <p>Year: {card.year}</p>
                        <p>Title: {card.title}</p>
                        <p>Sport: {card.category}</p>
                        <hr />
                        <p>Full Description: {card.description}</p>
                        <hr />
                        <h3>Price w/ Shipping (${card.price})</h3>
                        <button className="btn btn-success">Add To Cart</button>
                        <hr />
                    </div>
                    <div className="seller-info">
                        <h2>Seller: {card.user.username}</h2>
                    </div>
                </>
            ) : (<p>Loading...</p>)
            }
        </div>
    );
}