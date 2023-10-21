import { useState } from 'react';
import './NewCardForm.css'

export default function NewCardForm({ handleAddCard }) {
    const [card, setCard] = useState({
        player: '',
        year: '',
        title: '',
        price: '',
        images: '',
        category: '',
        description: ''
    })

    async function handleChange(e) {
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        });
        console.log(card);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddCard(card);
        console.log(card)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="player">Player</label>
                <input name='player' id='player' onChange={handleChange} />
                <label htmlFor="player">Year</label>
                <input name='year' id='year' onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <input name='title' id='title' onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input name='price' id='price' onChange={handleChange} />
                <label htmlFor="images">Image</label>
                <input name='images' id='images' onChange={handleChange} />
                <label htmlFor="category">Sport</label>
                <input name='category' id='category' onChange={handleChange} />
                <label htmlFor="description">Condtion/Other Details</label>
                <input name='description' id='description' onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
}