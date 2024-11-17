import "../styles/Footer.css"
import { ISocialLink } from "../types/SocialMedia"

export interface FooterProps{
    socialLinks: ISocialLink[];
    email: string;
}


export const Footer = ({ socialLinks, email }: FooterProps) =>{
      return (
        <footer className="footer">
            <div className="social-links">
                {socialLinks.map((link)=> (
                    <a
                        key = {link.url}
                        href={link.url}
                        aria-label={link.label}
                        className="social-link"
                    >
                        <img src={link.iconSrc} alt ={link.label} className="social-icon"></img>
                    </a>
                ))} 
            </div>
            <p className="footer-email">Email: {email}</p>
        </footer>
      );
};