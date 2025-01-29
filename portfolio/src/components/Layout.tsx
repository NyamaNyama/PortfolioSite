import { Background } from "./Background";
import "../styles/Layout.css"
import { useTheme } from "../context/ThemeContext";

interface LayoutProps{
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) =>{
    const { theme } = useTheme();
    return(
        <div className="layout">
            <Background />
            <div className={`content ${theme}`}>{children}</div>
        </div>
    )
}