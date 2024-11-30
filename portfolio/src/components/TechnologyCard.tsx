import { ITechnology } from "../types/Technology";
import "../styles/TechnologyCard.css"


export interface TechnologyCardProps{
    technology: ITechnology;
}

export const TechnologyCard = ({technology}: TechnologyCardProps) =>{
    return(
    <div className="tech-card">
      <img src={technology.logo} alt={technology.name} className="tech-icon" />
      <div className="tech-info">
        <h3 className="tech-name">{technology.name}</h3>
        <p className="tech-experience">Опыт: {technology.experience}</p>
        <a
          href={technology.doclink}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-doc"
        >
          Документация
        </a>
      </div>
    </div>
    );
};

