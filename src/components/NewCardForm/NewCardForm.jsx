import { useState, useRef } from 'react';
import './NewCardForm.css';
import * as cardsAPI from '../../utilities/cards-api';
import * as imagesAPI from '../../utilities/images-api';

export default function NewCardForm({ allCards, setAllCards }) {
    const [card, setCard] = useState({
        player: '',
        year: '',
        title: '',
        price: '',
        category: '',
        description: '',
        images: []
    });
    const fileInputRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < fileInputRef.current.files.length; i++) {  // Create a new FormData object and append the selected images
            formData.append('images', fileInputRef.current.files[i]);
        }
        const newImgs = await imagesAPI.uploadImgs(formData);  // Upload the image to AWS and get the URL
        const updatedCard = { // Update the image property in the card state
            ...card,
            images: newImgs,
        };
        const addedCard = await cardsAPI.add(updatedCard); // Add the updated card to the database
        setAllCards([...allCards, addedCard]);
        setCard({
            player: '',
            year: '',
            title: '',
            price: '',
            category: '',
            description: '',
            images: []
        });
        fileInputRef.current.value = ''; // Clear the file input
    }

    const handleChange = (e) => { // Update the state of the new card being created
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="player">Player</label>
                <input name="player" value={card.player} id="player" onChange={handleChange} />
                <label htmlFor="year">Year</label>
                <input name="year" id="year" value={card.year} onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <input name="title" id="title" value={card.title} onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input name="price" id="price" value={card.price} onChange={handleChange} />
                <label htmlFor="image">Image</label>
                <input type="file" name="images" ref={fileInputRef} id="images" multiple />
                <label htmlFor="category">Sport</label>
                <input name="category" id="category" value={card.category} onChange={handleChange} />
                <label htmlFor="description">Condition/Other Details</label>
                <input name="description" id="description" value={card.description} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

