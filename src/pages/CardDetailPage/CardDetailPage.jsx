import { useState, useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import '@splidejs/react-splide/css'
import './CardDetailPage.css';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

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
                        {card.user._id === user._id ?
                            <div>
                                <Link to={{
                                    pathname: `/cards/${card._id}/edit`,
                                    state: { card }
                                }}
                                >
                                    <button className='btn btn-success'>Edit Listing</button>
                                </Link>
                                <DeleteButton setAllCards={setAllCards} card={card} allCards={allCards} />
                            </div>
                            : <button className='btn btn-success'>Add to Cart</button>
                        }

                        <hr />
                    </div>
                    <div className="seller-info">
                        <h2>Seller: {card.user._id}</h2>
                        <h2>User: {user._id}</h2>
                        {card.user._id === user._id ?
                            <Link to='/dashboard'><button className='btn btn-success'>My dashboard</button> </Link> : <button className='btn btn-success'>Visit Store</button>
                        }
                    </div>
                </>
            ) : (<h1 className="d-flex">Loading...</h1>)
            }
        </div >
    );
}