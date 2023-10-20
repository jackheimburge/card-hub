import { useEffect, useState } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import CardList from '../../components/CardList/CardList';
import * as cardsAPI from '../../utilities/cards-api';
import './HomePage.css';

export default function HomePage() {
    const [allCards, setAllCards] = useState();

    useEffect(function () {
        async function getAllCards() {
            const allCards = await cardsAPI.getAllCards();
            setAllCards(allCards);
        }
        getAllCards();
    }, []);

    return (
        <div className='HomePage'>
            <CategoryList />
            <CardList allCards={allCards} />
        </div>
    );
}