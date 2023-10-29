import CategoryList from '../../components/CategoryList/CategoryList';
import CardList from '../../components/CardList/CardList';
import './HomePage.css';

export default function HomePage({ allCards, user, setCart, cart }) {

    return (
        <div className='HomePage'>
            <CardList allCards={allCards} user={user} setCart={setCart} cart={cart} />
        </div>
    );
}