import { useEffect, useState } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import CardList from '../../components/CardList/CardList';
import * as cardsAPI from '../../utilities/cards-api';
import './HomePage.css';

export default function HomePage({ allCards }) {

    return (
        <div className='HomePage'>
            <CategoryList />
            <CardList allCards={allCards} />
        </div>
    );
}