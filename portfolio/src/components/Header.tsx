import "../styles/Header.css"
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from "framer-motion";
import { navItemVariants, buttonVariants } from "../animations/animations";


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
        {["/", "/about", "/skills", "/projects", "/contact"].map((path, index) => (
          <motion.div
            key={index}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Link to={path} className="nav-link" onDragStart={handleDragStart}>
              {path === "/" ? "Главная" :
              path === "/about" ? "Обо мне" :
              path === "/skills" ? "Навыки" :
              path === "/projects" ? "Проекты" :
              "Обратная связь"}
            </Link>
          </motion.div>
        ))}
        </nav>
        <motion.button 
        onClick={toggleTheme} 
        className="theme-toggle"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
      </motion.button>
    </header>
    );
};