import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProjects, fetchProjectsFromGitHub } from '../store/projectsSlice';
import { Layout } from '../components/Layout';
import { ProjectFilter } from '../components/ProjectFilter';
import { ProjectList } from '../components/ProjectList';
import { AddProjectForm } from '../components/AddProjectForm';
import '../styles/Projects.css';

export const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const projectStatus = useSelector((state: RootState) => state.projects.status);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');

    if (savedProjects) {
      dispatch(setProjects(JSON.parse(savedProjects)));
    } else if (projects.length === 0 && projectStatus === 'idle') {
      dispatch(fetchProjectsFromGitHub('NyamaNyama')).then((action) => {
        if (action.type === 'projects/fetchFromGitHub/fulfilled') {
          localStorage.setItem('projects', JSON.stringify(action.payload));
        }
      });
    }
  }, [dispatch, projects.length, projectStatus]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
  }, [projects, selectedTech]);

  return (
    <Layout>
      {showAddForm ? (
        <AddProjectForm onClose={() => setShowAddForm(false)} />
      ) : (
        <>
          <h2>Мои проекты</h2>
          <button onClick={() => setShowAddForm(true)} className="form-button">
            Добавить проект
          </button>
          <ProjectFilter selectedTech={selectedTech} onFilterChange={setSelectedTech} />
          <ProjectList projects={filteredProjects} />
        </>
      )}
    </Layout>
  );
};
