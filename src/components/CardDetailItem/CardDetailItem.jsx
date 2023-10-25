import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function CardDetailItem({ card, setAllCards, allCards, user }) {
    return (
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
    );
}