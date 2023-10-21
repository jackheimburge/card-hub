import NewCardForm from "../../components/NewCardForm/NewCardForm";
import * as cardsAPI from '../../utilities/cards-api'

export default function DashboardPage({ allCards, user, setAllCards }) {

    const userCards = allCards.filter((card) => card.user === user);

    async function handleAddCard(cardData) {
        const card = await cardsAPI.add(cardData);
        setAllCards([card, ...allCards]);
    }


    return (
        <div>
            {userCards.map((card) => <p>{card.player}</p>)}
            <NewCardForm handleAddCard={handleAddCard} />
        </div >
    );
}