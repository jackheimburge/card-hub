import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import EditCardForm from "../../components/EditCardForm/EditCardForm";

export default function EditCardPage({ allCards, setAllCards }) {
    const { id } = useParams();
    const [userCard, setUserCard] = useState([]);
    useEffect(() => {
        const cardToEdit = allCards.find(card => card._id === id);
        setUserCard(cardToEdit);
    }, [id, allCards]);

    return (
        <div className="EditCardPage">
            <EditCardForm userCard={userCard} setUserCard={setUserCard} allCards={allCards} setAllCards={setAllCards} />
        </div>
    );
}