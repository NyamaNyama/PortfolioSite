import { Layout } from "../components/Layout";
import {TechnologyCard} from "../components/TechnologyCard"
import { Technologies } from "../data/Technologies";
import "../styles/Skills.css"

export const Skills = () =>{
    return (
        <Layout>
        <h2>Мои навыки</h2>
      <div className="skills-list">
        {Technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
        </Layout>
    );
};