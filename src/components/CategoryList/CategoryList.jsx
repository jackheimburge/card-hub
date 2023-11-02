import './CategoryList.css';

export default function CategoryList({ setFilterText, setCat }) {

    function handleClick(category) {
        setFilterText('');
        setCat(category);
    }

    return (
        <div className="CategoryList mt-4">
            <button id="basketball" name="basketball" onClick={() => handleClick('Basketball')}><img src="https://i.imgur.com/CsmVzb9.png" alt="" />
                <label htmlFor="basketball">Basketball</label></button>
            <button id="football" name="football" onClick={() => handleClick('Football')}><img src="https://i.imgur.com/E4hYaeS.png" alt="" />
                <label htmlFor="football">Football</label></button>
            <button id="baseball" name="baseball" onClick={() => handleClick('Baseball')}><img src="https://i.imgur.com/dULoud4.png" alt="" />
                <label htmlFor="baseball">Baseball</label></button>
            <button id="soccer" name="soccer" onClick={() => handleClick('Soccer')}><img src="https://i.imgur.com/MAMUSfs.png" alt="" />
                <label htmlFor="soccer">Soccer</label></button>
            <button id="other" name="other" onClick={() => handleClick('Other')}><img src="https://i.imgur.com/aSC2ZF6.png" alt="" />
                <label htmlFor="other">Other</label></button>
            <button id="all" name="all" onClick={() => handleClick('')}><img src="https://i.imgur.com/i9ZBaEC.png" alt="" />
                <label htmlFor="all">All Cards</label></button>
        </div>
    );
}