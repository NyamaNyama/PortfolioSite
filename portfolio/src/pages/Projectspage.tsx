import { useState } from 'react';
import { Layout } from "../components/Layout";
import { projects } from '../data/Projects';
import { IProject } from '../types/Project';
import "../styles/Projects.css"

export const Projects = () =>{
    const [selectedTech, setSelectedTech] = useState<string>('All');


    const filteredProjects = projects.filter((project) =>
      selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
    return (
        <Layout>
        <h2>Мои проекты</h2>
        <div className="filter">
        <label htmlFor="technology-filter">Выберите технологию: </label>
        <select
            id="technology-filter"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
        >
            <option value="All">Все технологии</option>
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Unity">Unity</option>
            <option value="Vue">Vue</option>
            <option value="Electron">Electron</option>
        </select>
        </div>


        <div className="projects-list">
        {filteredProjects.length > 0 ? (
            filteredProjects.map((project: IProject) => (
            <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech">
                Технологии: {project.technologies.join(', ')}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                Перейти на GitHub
                </a>
            </div>
            ))
        ) : (
            <p>Проекты не найдены</p>
        )}
        </div>
        </Layout>
    );
};