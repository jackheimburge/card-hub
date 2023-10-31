import CardList from '../../components/CardList/CardList';
import { useEffect } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import './HomePage.css';

export default function HomePage({ allCards, user, setAllCards }) {
    useEffect(() => {
        async function getAllCards() {
            const allCards = await cardsAPI.getAllCards();
            setAllCards(allCards);
        } getAllCards();
    }, [])
    return (
        <div className='HomePage'>
            <CardList allCards={allCards} user={user} />
        </div>
    );
}