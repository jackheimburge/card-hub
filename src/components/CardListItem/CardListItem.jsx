import { Link } from "react-router-dom";
import './CardListItem.css'
import * as ordersAPI from '../../utilities/orders-api';


export default function CardListItem({ card, userId, setCart }) {
    async function handleAddToCart(cardId) {
        const updatedCart = await ordersAPI.addCardToCart(cardId);
        setCart(updatedCart);
    }

    return (
        <div className='CardListItem mb-5 col-4'>
            <Link to={`/cards/${card._id}`} >
                <img src={card.images[0]} alt="" />
            </Link>
            <div className="info">
                <h4>{card.player}</h4>
                <hr />
                <h5>{card.title}</h5>
                <hr />
                <p>${card.price}</p>
            </div>
        </div >
    );
}
