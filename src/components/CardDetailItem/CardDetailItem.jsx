import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CardDetailItem.css';

export default function CardDetailItem({ card, setAllCards, allCards, user, handleAddToCart, handleRemoveFromCart, cart }) {
    return (
        <div className="card-info">
            <h1>{card.player}</h1>
            <hr />
            <p><span>Year: &nbsp;</span> {card.year}</p>
            <p><span>Title: &nbsp;</span> {card.title}</p>
            <p><span>Sport: &nbsp;</span> {card.category}</p>
            <hr />
            <p><span>Description: &nbsp;</span> {card.description}</p>
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
                : <button
                    className={`btn ${cart.some(item => item._id === card._id) ? 'btn-danger' : 'btn-success'}`}

                    onClick={() => {
                        if (cart.some((item) => item._id === card._id)) {
                            handleRemoveFromCart(card._id);
                        } else {
                            handleAddToCart(card._id);
                        }
                    }}
                >
                    {cart.some((item) => item._id === card._id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            }
        </div >
    );
}