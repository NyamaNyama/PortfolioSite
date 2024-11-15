import githubIcon from "../assets/Icons/icons8-github.svg"
import telegramIcon from "../assets/Icons/icons8-телеграм.svg"
import steamIcon from "../assets/Icons/icons8-steam.svg"
import discordIcon from "../assets/Icons/icons8-discord.svg"

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
            label: 'Discord('
        }
      ];

      return (
        <footer className="footer">
            <div>
                {socialLinks.map((link) => (
                    <a
                        href={link.url}
                        aria-label={link.label}
                        
                    >
                        <img src={link.iconSrc}></img>
                    </a>
                ))}
            </div>
        </footer>
      );
};