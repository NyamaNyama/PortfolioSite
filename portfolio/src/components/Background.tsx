import "../styles/Background.css"
import { useTheme } from "../context/ThemeContext";

export const Background = () =>{
    const { theme } = useTheme();
    
    return <div className={`background ${theme}`}></div>;
}