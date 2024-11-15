import "../styles/Header.css"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
    <header className="header">
        <div className="company-name">
            <h1>ITxON</h1>
        </div>
        <nav className="navigation">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/about" className="nav-link">Обо мне</Link>
        <Link to="/skills" className="nav-link">Технологии</Link>
        <Link to="/projects" className="nav-link">Проекты</Link>
        <Link to="/contact" className="nav-link">Обратная связь</Link>
        </nav>
    </header>
    );
};