import { ISocialLink} from "../types/SocialMedia"
import githubIcon from "../assets/Icons/github_logo_94lqwcmbt0ue.svg"
import telegramIcon from "../assets/Icons/icons8-телеграм.svg"
import steamIcon from "../assets/Icons/icons8-steam.svg"
import discordIcon from "../assets/Icons/icons8-discord.svg"


export const socialLinks: ISocialLink[]=[
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
]