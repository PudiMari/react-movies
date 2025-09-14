import { Link } from "react-router-dom";
import './MainNav.css';

export function MainNav() {
    return (
        <nav className="main-navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    React Movies
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favoritos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}