import CardListItem from "../CardListItem/CardListItem";


export default function CardList({ allCards }) {
    return (
        <div className="CardList">
            {allCards.map((card, idx) => <CardListItem key={idx} card={card} />)}
        </div>
    );
}
// const ft = Card.create({ player: 'Fernando Tatis Jr.', year: 2018, title: 'Topps #203', price: '22.99', images: ['https://m.media-amazon.com/images/I/71yv36zQEAL.jpg'], category: 'Baseball' });