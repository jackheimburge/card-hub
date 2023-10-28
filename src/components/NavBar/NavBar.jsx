import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Navbar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-light">
            <Link to="/">
                <button className="navbar-brand" >
                    <img id='nav-logo' src="https://i.imgur.com/LfL2Oth.png" alt="" />
                </button>
            </Link>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Hello, {user.name.split(' ')[0]}!
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <Link to="/dashboard"><li><button className="dropdown-item" >Dashboard</button></li></Link>
                                <Link to="/cart"><button className="dropdown-item" >Cart</button></Link>
                                <Link to="" onClick={handleLogOut}><li><button className="dropdown-item" >Log Out</button></li></Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


