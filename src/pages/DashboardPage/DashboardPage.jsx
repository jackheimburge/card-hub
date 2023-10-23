import CardListItem from "../../components/CardListItem/CardListItem";
import NewCardForm from "../../components/NewCardForm/NewCardForm";

export default function DashboardPage({ allCards, user, setAllCards }) {

    const userCards = allCards.filter((card) => card.user === user._id);


    return (
        <div>
            {userCards.map((card, idx) =>
                <CardListItem key={idx} card={card} />
            )}
            <NewCardForm allCards={allCards} setAllCards={setAllCards} />
        </div >
    );
}