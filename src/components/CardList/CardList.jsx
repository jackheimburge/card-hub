import { useState, useRef, useEffect } from 'react';
import CardListItem from "../CardListItem/CardListItem";

const delayMs = 300;

export default function CardList({ allCards }) {
    const [filterText, setFilterText] = useState('');
    const [filteredItems, setFilteredItems] = useState(allCards);
    const timerIdRef = useRef();

    useEffect(function () {
        function doFilter() {
            const re = new RegExp(`.*${filterText}.*`, 'i');
            setFilteredItems(allCards.filter(card => re.test(card.player) || re.test(card.title)));
        }

        // Clear the previous timer and set a new one
        clearTimeout(timerIdRef.current);
        timerIdRef.current = setTimeout(doFilter, delayMs);

        return () => clearTimeout(timerIdRef.current);
    }, [filterText, allCards]);

    return (
        <div className="CardList row">
            <input value={filterText} onChange={(evt) => setFilterText(evt.target.value)} placeholder='Search for cards' />
            {filteredItems.map((card, idx) => <CardListItem key={idx} card={card} />)}
        </div>
    );
}
