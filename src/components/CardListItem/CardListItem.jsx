import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import './CardListItem.css'


export default function CardListItem({ card }) {

    return (
        <div className='CardListItem col-4 mb-5'>
            <div className="card" >
                <Carousel card={card} />
                <div className="card-body">
                    <h5 className="card-title">{card.player}</h5>
                    <p className="card-text">{card.title}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${card.price}</li>
                </ul>
                <div className="card-body">
                    <Link to={`/cards/${card._id}`} ><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div >
    );
}