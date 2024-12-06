import { useEffect, useState } from 'react';
import { setProjects } from '../store/projectsSlice';
import { Layout } from "../components/Layout";
import { projects as dataProjects } from '../data/Projects';
import "../styles/Projects.css";
import { useSelector, useDispatch } from 'react-redux';
 import { RootState, AppDispatch } from '../store';

import "../styles/Projects.css"

export const Projects = () =>{
    const projects = useSelector((state: RootState) => 
        state.projects.items);
    const dispatch = useDispatch<AppDispatch>();

    const [selectedTech, setSelectedTech] = useState<string>('All');

  useEffect(() => {
    dispatch(setProjects(dataProjects));
  }, [dispatch]);

  const filteredProjects = projects.filter((project) =>
    selectedTech === 'All'
      ? true
      : project.technologies.includes(selectedTech)
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
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">
                Технологии: {project.technologies.join(', ')}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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