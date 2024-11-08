import "../styles/Header.css"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
    <header className="header">
        <nav className="nav">
        <Link to="/" className="nav-link">Main</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Technologies</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
    );
};