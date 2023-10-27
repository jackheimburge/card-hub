import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Navbar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav class="navbar navbar-expand-lg bg-body-light">
            <Link to="/">
                <a class="navbar-brand" href="#">
                    <img id='nav-logo' src="https://i.imgur.com/LfL2Oth.png" alt="" />
                </a>
            </Link>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hello, {user.name.split(' ')[0]}!
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <Link to="/dashboard"><li><a class="dropdown-item" href="#">Dashboard</a></li></Link>
                                <Link to="/cart"><a class="dropdown-item" href="#">Cart</a></Link>
                                <Link to="" onClick={handleLogOut}><li><a class="dropdown-item" href="#">Log Out</a></li></Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


