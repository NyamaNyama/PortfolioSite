import { IProject } from '../types/Project';
import '../styles/ProjectsList.css';

interface ProjectListProps {
  projects: IProject[];
}

export const ProjectList = ({ projects }:ProjectListProps) => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="tech">Технологии: {project.technologies.join(', ')}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Перейти на GitHub
          </a>
        </div>
      ))}
    </div>
  );
};
