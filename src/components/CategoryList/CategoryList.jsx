import './CategoryList.css';

export default function CategoryList({ setFilterText, setCat }) {

    function handleClick(category) {
        setFilterText('');
        setCat(category);
    }

    return (
        <div className="CategoryList mt-5">
            <button id="basketball" name="basketball" onClick={() => handleClick('Basketball')}><img src="https://i.imgur.com/4msd6GV.png" alt="" />
                <label htmlFor="basketball">Basketball</label></button>
            <button id="football" name="football" onClick={() => handleClick('Football')}><img src="https://i.imgur.com/xDsZrvV.png" alt="" />
                <label htmlFor="football">Football</label></button>
            <button id="baseball" name="baseball" onClick={() => handleClick('Baseball')}><img src="https://i.imgur.com/on8EXLM.png" alt="" />
                <label htmlFor="baseball">Baseball</label></button>
            <button id="soccer" name="soccer" onClick={() => handleClick('Soccer')}><img src="https://i.imgur.com/m1qB6SC.png" alt="" />
                <label htmlFor="soccer">Soccer</label></button>
            <button id="other" name="other" onClick={() => handleClick('Other')}><img src="https://i.imgur.com/N8E9Zil.png" alt="" />
                <label htmlFor="other">Other</label></button>
            <button id="other" name="other" onClick={() => handleClick('')}><img src="https://i.imgur.com/N8E9Zil.png" alt="" />
                <label htmlFor="other">All Cards</label></button>
        </div>
    );
}