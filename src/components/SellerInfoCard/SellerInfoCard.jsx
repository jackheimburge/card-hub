import { Link } from 'react-router-dom';

export default function SellerInfo({ card, user }) {
    return (
        <div className="seller-info">
            <h2>Seller: {card.user._id}</h2>
            <h2>User: {user._id}</h2>
            {card.user._id === user._id ?
                <Link to='/dashboard'><button className='btn btn-success'>My dashboard</button> </Link> : <button className='btn btn-success'>Visit Store</button>
            }
        </div>
    )
}