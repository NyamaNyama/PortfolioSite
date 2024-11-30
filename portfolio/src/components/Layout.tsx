import { Background } from "./Background";
import "../styles/Layout.css"

interface LayoutProps{
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) =>{
    return(
        <div className="layout">
            <Background />
            <div className="content">{children}</div>
        </div>
    )
}