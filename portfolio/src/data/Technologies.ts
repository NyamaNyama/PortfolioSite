import { ITechnology } from "../types/Technology";

import UnityIcon from "../assets/Icons/U.svg"
import ReactIcon from "../assets/Icons/React-icon.svg"
import VueIcon from "../assets/Icons/Vue.js_Logo_2.svg"

export const Technologies: ITechnology[] = [
    {
        logo: UnityIcon,
        name: 'Unity',
        experience: '2 года',
        doclink: 'https://docs.unity3d.com/',
    },
    {
        logo: ReactIcon,
        name: 'React',
        experience: '2 недели',
        doclink: 'https://react.dev/',
    },
    {
        logo: VueIcon,
        name: 'Vue',
        experience: '1 неделя',
        doclink: 'https://vuejs.org/',
    }
]