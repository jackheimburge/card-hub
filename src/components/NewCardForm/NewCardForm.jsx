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

    // An array to store image URLs before submission
    const [imageUrl, setImageUrl] = useState([]);

    async function handleImageUpload() {
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);
        const newImg = await imagesAPI.uploadImg(formData);
        setImageUrl(newImg)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // Upload the selected images to AWS and store the image URLs
        handleImageUpload();
        // Set the image URLs in the card state
        setCard({
            ...card,
            image: imageUrl,
        });

        // Add the card to the database
        const addedCard = await cardsAPI.add(card);

        // Clear the form and file input
        setAllCards([addedCard, ...allCards]);
        setCard({
            player: '',
            year: '',
            title: '',
            price: '',
            category: '',
            description: '',
            image: '',
        });
        fileInputRef.current.value = '';
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
