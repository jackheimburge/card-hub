import { Link } from "react-router-dom";
import './CardListItem.css'


export default function CardListItem({ card }) {

    return (
        <div className='CardListItem mb-5'>
            <Link to={`/cards/${card._id}`} >
                <img src={card.images[0]} alt="" />
            </Link>
            <div className="info">
                <h4>{card.player}</h4>
                <hr />
                <h5>{card.title}</h5>
                <h4>${card.price}</h4>
                <hr />
                <h5>{card.category}</h5>
            </div>
        </div >
    );
}