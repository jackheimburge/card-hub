import './CardListItem.css'

export default function CardListItem({ card }) {
    return (
        <div className='CardListItem'>
            <p>{card.player}</p>
            <p>{card.title}</p>
            <img src={card.image} alt="" />
            <hr />
        </div>
    );
}