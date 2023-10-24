import CardListItem from "../../components/CardListItem/CardListItem";
import NewCardForm from "../../components/NewCardForm/NewCardForm";
import { useState, useEffect } from 'react';

export default function DashboardPage({ allCards, user, setAllCards }) {
    const [userCards, setUserCards] = useState([]);

    useEffect(() => {
        // Filter the cards based on the user ID
        const filterUserCards = async () => {
            const filteredCards = allCards.filter((card) => card.user === user._id);
            setUserCards(filteredCards);
        };
        filterUserCards();
    }, [allCards, user._id]);

    return (
        <div className="DashboardPage row mt-5">
            <NewCardForm allCards={allCards} setAllCards={setAllCards} />
            {userCards.map((card) =>
                <CardListItem key={card._id} card={card} />
            )}
        </div>
    );
}
