import './StorefrontPage.css';
import { useParams } from 'react-router-dom';

export default function StorefrontPage() {
    const { userId } = useParams();
    return (
        <div className='StorefrontPage'>
            <h1>Storefront {userId}</h1>
        </div>
    );
}