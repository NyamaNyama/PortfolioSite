import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProjects } from '../store/projectsSlice';
import { projects as dataProjects } from '../data/Projects';
import { Layout } from '../components/Layout';
import { ProjectFilter } from '../components/ProjectFilter';
import { ProjectList } from '../components/ProjectList';
import { AddProjectForm } from '../components/AddProjectForm';
import '../styles/Projects.css';

export const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');

    if (savedProjects) {
      dispatch(setProjects(JSON.parse(savedProjects)));
    } else if (projects.length === 0) {
      dispatch(setProjects(dataProjects));
    }
  }, [dispatch, projects.length]);

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
