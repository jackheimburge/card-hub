import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as imagesAPI from '../../utilities/images-api';
import * as cardsAPI from '../../utilities/cards-api';
import './EditCardForm.css';

export default function EditCardForm({ userCard, setUserCard, setAllCards }) {
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef();
    const navigate = useNavigate();
    async function handleSubmit(e) {

        e.preventDefault();
        setIsUploading(true);
        const formData = new FormData();
        for (let i = 0; i < fileInputRef.current.files.length; i++) {  // Create a new FormData object and append the selected images
            formData.append('images', fileInputRef.current.files[i]);
        }
        const newImgs = await imagesAPI.uploadImgs(formData);  // Upload the image to AWS and get the URL
        const updatedCard = { // Update the image property in the card state
            ...userCard,
            images: newImgs
        };
        const allUpdatedCards = await cardsAPI.update(updatedCard);
        setAllCards(allUpdatedCards);
        setIsUploading(false);
        navigate(`/cards/${userCard._id}`);
    }

    const handleChange = (e) => { // Update the state of the new card being created
        setUserCard({
            ...userCard,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>{userCard.player}: {userCard.title}</h1>
            <form className='EditCardForm' onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="player">Player</label>
                <input required name="player" value={userCard.player || ''} id="player" onChange={handleChange} />
                <label htmlFor="year">Year</label>
                <input required name="year" id="year" value={userCard.year || ''} onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <input required name="title" id="title" value={userCard.title || ''} onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input required name="price" id="price" value={userCard.price || ''} onChange={handleChange} />
                <label htmlFor="image">Image</label>
                <input type="file" name="images" ref={fileInputRef} id="images" multiple />
                <label htmlFor="category">Sport</label>
                <select required name="category" id="category" value={userCard.category || ''} onChange={handleChange} >
                    <option >-Select a Category-</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Baseball">Baseball</option>
                    <option value="Football">Football</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="description">Condition/Other Details</label>
                <input required name="description" id="description" value={userCard.description || ''} onChange={handleChange} />
                <button className='btn btn-primary' disabled={isUploading} type="submit">Submit</button>
                <h1>{isUploading ? 'Loading...' : ''}</h1>
            </form>
        </div >

    );
}
