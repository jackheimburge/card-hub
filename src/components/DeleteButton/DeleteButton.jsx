import * as cardsAPI from '../../utilities/cards-api';
import { useNavigate } from 'react-router-dom';
import './DeleteButton.css';

export default function DeleteButton({ card, setAllCards, allCards }) {

    const navigate = useNavigate();

    async function handleDeleteCard() {
        try {
            const deletedCard = await cardsAPI.deleteCard(card);
            setAllCards(allCards.filter(card => card.id !== deletedCard._id));
            navigate('/dashboard');
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <button onClick={handleDeleteCard} className="btn btn-danger">Delete</button>
    );
}