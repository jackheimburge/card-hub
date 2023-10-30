import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function CardDetailItem({ card, setAllCards, allCards, user, handleAddToCart, handleRemoveFromCart, cart }) {
    return (
        <div className="card-info">
            <h1>{card.player}</h1>
            <hr />
            <p><span>Year: </span> {card.year}</p>
            <p><span>Title: </span> {card.title}</p>
            <p><span>Sport: </span> {card.category}</p>
            <hr />
            <p><span>Description: </span> {card.description}</p>
            <hr />
            <h3>Price w/ Shipping (${card.price})</h3>
            {card.user._id === user._id ?
                <div>
                    <Link to={{
                        pathname: `/cards/${card._id}/edit`,
                        state: { card }
                    }}
                    >
                        <button className='btn btn-warning mx-5'>Edit Listing</button>
                    </Link>
                    <DeleteButton setAllCards={setAllCards} card={card} allCards={allCards} />
                </div>
                : <>
                    <button className='btn btn-success' onClick={() => handleAddToCart(card._id)} >Add to Cart</button>
                    <button className='btn btn-danger' onClick={() => handleRemoveFromCart(card._id)} >Remove from Cart</button>
                </>
            }
        </div>
    );
}