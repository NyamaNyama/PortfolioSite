import "../styles/Header.css"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
    <header className="header">
        
        <Link to="/" className="home-link">Главная</Link>
        <Link to="/about" className="about-link">Обо мне</Link>
        <Link to="/skills" className="skills-link">Технологии</Link>
        <Link to="/projects" className="projects-link">Проекты</Link>
        <Link to="/contact" className="contact-link">Обратная связь</Link>

    </header>
    );
};