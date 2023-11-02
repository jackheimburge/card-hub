import { useState, useRef, useEffect } from 'react';
import CardListItem from "../CardListItem/CardListItem";
import CategoryList from "../CategoryList/CategoryList";
import './CardList.css';

const delayMs = 100;

export default function CardList({ allCards, user }) {
    const [filterText, setFilterText] = useState('');
    const [cat, setCat] = useState('');
    const [filteredItems, setFilteredItems] = useState(allCards);
    const timerIdRef = useRef();

    useEffect(function () {
        function doFilter() {
            const re = new RegExp(`.*${filterText}.*`, 'i');
            const filterByText = allCards.filter(card => re.test(card.player) || re.test(card.title) || re.test(card.category));
            // Filter by category
            const allFilters = filterByText.filter(card => !cat || card.category === cat);
            setFilteredItems(allFilters);
        }
        // Clear the previous timer and set a new one
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(doFilter, delayMs);

        return () => clearTimeout(timerIdRef.current);
    }, [filterText, cat, allCards]);

    return (
        <div className="CardList ">
            <CategoryList
                setCat={setCat}
                setFilterText={setFilterText}
            />
            <input
                className='filter-input'
                value={filterText} // Show only the filter text
                onChange={(evt) => setFilterText(evt.target.value)}
                placeholder='Search for anything'
            />
            <div className="row card-list">
                {filteredItems.map((card, idx) => <CardListItem key={idx} card={card} userId={user._id} />)}
            </div>
        </div>
    );
}
