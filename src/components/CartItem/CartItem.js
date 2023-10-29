export default function cartItem({ card }) {
    return (
        <div>
            <h1>{card.player}</h1>
            <h1>{card.title}</h1>
            <h1>${card.price}</h1>
        </div>
    );
}