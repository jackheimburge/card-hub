import CardListItem from "../../components/CardListItem/CardListItem";
import NewCardForm from "../../components/NewCardForm/NewCardForm";
import { useState, useEffect } from 'react';
import './DashboardPage.css';

export default function DashboardPage({ allCards, user, setAllCards }) {
    const [userCards, setUserCards] = useState([]);
    const [showNewForm, setShowNewForm] = useState(false);

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
            <h1>{user.username}'s Dashboard</h1>
            {userCards.map((card) =>
                <CardListItem key={card._id} card={card} />
            )}
            {showNewForm ? <NewCardForm allCards={allCards} setAllCards={setAllCards} /> : null}
            <button onClick={() => setShowNewForm(!showNewForm)}>{showNewForm ? 'Close' : 'Create a listing'}</button>
        </div>
    );
}
