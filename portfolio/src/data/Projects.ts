import { IProject } from '../types/Project';
 export const projects: IProject[] = [
    {
        id: 1,
        title: 'WoodLand',
        description: 'WoodLand - это jumper игра, где человек играет за персонажа, который может прыгать через встречающиеся ему препятсвия, стремясь достичь наилучшего результата',
        technologies: ['Vue', 'TypeScript','Electron'],
        link: 'https://github.com/NyamaNyama/WoodLand',
    },
    {
        id: 2,
        title: 'Storm',
        description: 'Storm - аркадная игра созданная для геймджема',
        technologies: ['Unity'],
        link: 'https://github.com/it-x-on/Storm',
    },
    {
        id: 3,
        title: 'PortfolioSite',
        description: 'Сайт портфолио с подробной информацией обо мне',
        technologies: ['React','TypeScript'],
        link: 'https://github.com/NyamaNyama/PortfolioSite',
    },
    {
        id: 4,
        title: 'VisitSite',
        description: 'Статический сайт визитка',
        technologies: ['JavaScript'],
        link: 'https://github.com/NyamaNyama/VisitSite',
    }
 ];