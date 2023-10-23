import { Link } from "react-router-dom";
import './CardListItem.css'


export default function CardListItem({ card }) {

    return (
        <div className='CardListItem'>
            <Link to={`/cards/${card._id}`} >
                <p>{card.player}</p>
                <p>{card.title}</p>
                <img src={card.images[0]} alt="" />
                <img src={card.images[1]} alt="" />
                <hr />
            </Link>
        </div >
    );
}