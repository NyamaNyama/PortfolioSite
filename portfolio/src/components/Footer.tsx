import githubIcon from "../assets/Icons/github_logo_94lqwcmbt0ue.svg"
import telegramIcon from "../assets/Icons/icons8-телеграм.svg"
import steamIcon from "../assets/Icons/icons8-steam.svg"
import discordIcon from "../assets/Icons/icons8-discord.svg"
import "../styles/Footer.css"

interface SocialLinkProps{
    iconSrc: string;
    url: string;
    label: string;   
}


export const Footer = () =>{
    const socialLinks: SocialLinkProps[] = [
        {
          iconSrc: githubIcon,
          url: 'https://github.com/NyamaNyama',
          label: 'GitHub'
        },
        {
          iconSrc:  telegramIcon,
          url: 'https://t.me/mechanicHater',
          label: 'Telegram'
        },
        {
          iconSrc: steamIcon,
          url: 'https://steamcommunity.com/profiles/76561198421809668/',
          label: 'Steam'
        },
        {
            iconSrc: discordIcon,
            url: 'https://discord.ru',
            label: 'Discord'
        }
      ];

      return (
        <footer className="footer">
            <div className="social-links">
                {socialLinks.map((link) => (
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
            <p className="footer-email">Email: tihonshkarin31012004@gmail.com</p>
        </footer>
      );
};