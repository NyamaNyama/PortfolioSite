import { ITechnology } from "../types/Technology";
import "../styles/TechnologyCard.css"


export interface TechnologyCardProps{
    technology: ITechnology;
}

export const TechnologyCard = ({technology}: TechnologyCardProps) =>{
    return(
    <div className="skill-card">
      <img src={technology.logo} alt={technology.name} className="skill-icon" />
      <div className="skill-info">
        <h3 className="skill-name">{technology.name}</h3>
        <p className="skill-experience">Опыт: {technology.experience}</p>
        <a
          href={technology.doclink}
          target="_blank"
          rel="noopener noreferrer"
          className="skill-link"
        >
          Документация
        </a>
      </div>
    </div>
    );
};

