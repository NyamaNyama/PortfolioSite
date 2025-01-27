import "../styles/Header.css"
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';


export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const handleDragStart = (event: React.DragEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };

    return (
    <header className={`header ${theme}`}>
        <div className="company-name">
            <h1>ITxON</h1>
        </div>
        <nav className="navigation">
        <Link to="/" className="nav-link" onDragStart={handleDragStart}>Главная</Link>
        <Link to="/about" className="nav-link" onDragStart={handleDragStart}>Обо мне</Link>
        <Link to="/skills" className="nav-link" onDragStart={handleDragStart}>Навыки</Link>
        <Link to="/projects" className="nav-link" onDragStart={handleDragStart}>Проекты</Link>
        <Link to="/contact" className="nav-link" onDragStart={handleDragStart}>Обратная связь</Link>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
        </button>
    </header>
    );
};