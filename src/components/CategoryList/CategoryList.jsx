import './CategoryList.css';

export default function CategoryList() {
    return (
        <div className="CategoryList mt-5">
            <h1 className="mb-5">Browse By your Favorite Sport</h1>
            <button id="basketball"><img src="https://i.imgur.com/4msd6GV.png" alt="" />
                <label htmlFor="basketball">Basketball</label></button>
            <button id="football"><img src="https://i.imgur.com/xDsZrvV.png" alt="" />
                <label htmlFor="football">Football</label></button>
            <button id="baseball"><img src="https://i.imgur.com/on8EXLM.png" alt="" />
                <label htmlFor="baseball">Baseball</label></button>
            <button id="soccer"><img src="https://i.imgur.com/m1qB6SC.png" alt="" />
                <label htmlFor="soccer">Soccer</label></button>
            <button id="other"><img src="https://i.imgur.com/N8E9Zil.png" alt="" />
                <label htmlFor="other">Other</label></button>
        </div>
    );
}