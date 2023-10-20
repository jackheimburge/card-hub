export default function CardListItem({ card }) {
    return (
        <div>
            <p>{card.player}</p>
            <p>{card.title}</p>
            <hr />
        </div>
    );
}