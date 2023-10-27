import CategoryList from '../../components/CategoryList/CategoryList';
import CardList from '../../components/CardList/CardList';
import './HomePage.css';

export default function HomePage({ allCards }) {

    return (
        <div className='HomePage'>
            <CardList allCards={allCards} />
        </div>
    );
}