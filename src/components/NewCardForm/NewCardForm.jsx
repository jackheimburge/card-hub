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
        image: '', // To store image URLs
    });
    const fileInputRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        // Create a new FormData object and append the selected image
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);

        // Upload the image to AWS and get the URL
        const newImg = await imagesAPI.uploadImg(formData);

        // Update the image property in the card state
        const updatedCard = {
            ...card,
            image: newImg,
        };

        // Add the updated card to the database
        const addedCard = await cardsAPI.add(updatedCard);

        // Clear the form and file input
        setAllCards([addedCard, ...allCards]);
        setCard({
            player: '',
            year: '',
            title: '',
            price: '',
            category: '',
            description: '',
            image: '', // Reset the image URL
        });

        fileInputRef.current.value = ''; // Clear the file input
    }

    const handleChange = (e) => {
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="player">Player</label>
                <input name="player" id="player" onChange={handleChange} />
                <label htmlFor="year">Year</label>
                <input name="year" id="year" onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <input name="title" id="title" onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input name="price" id="price" onChange={handleChange} />
                <label htmlFor="image">Image</label>
                <input type="file" name="image" ref={fileInputRef} id="image" />
                <label htmlFor="category">Sport</label>
                <input name="category" id="category" onChange={handleChange} />
                <label htmlFor="description">Condition/Other Details</label>
                <input name="description" id="description" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
