import { useEffect, useState, useMemo,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProjects, fetchProjectsFromGitHub } from '../store/projectsSlice';
import { Layout } from '../components/Layout';
import { ProjectFilter } from '../components/ProjectFilter';
import { ProjectList } from '../components/ProjectList';
import { AddProjectForm } from '../components/AddProjectForm';
import { Spinner } from '../components/Spinner';
import { RefreshButton } from '../components/RefreshButton';
import { isFulfilled, isRejected } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import '../styles/Projects.css';
import { IProject } from '../types/Project';

export const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const projectStatus = useSelector((state: RootState) => state.projects.status);
  const projectError = useSelector((state: RootState) => state.projects.error);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const loadProjects = useCallback(() => {
    dispatch(fetchProjectsFromGitHub('NyamaNyama'))
      .then((action) => {
        if (isFulfilled(action)) {
          saveToLocalStorage('projects', action.payload);
        } else if (isRejected(action)) {
          const savedProjects = loadFromLocalStorage<IProject[]>('projects');

          if (savedProjects && Array.isArray(savedProjects)) {
            dispatch(setProjects(savedProjects));
            console.log('Проекты загружены из localStorage:', savedProjects);
          } else {
            console.warn('Данные в localStorage некорректны или отсутствуют.');
          }
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке проектов с GitHub:', error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (projectStatus === 'idle') {
      loadProjects();
    }
  }, [loadProjects, projectStatus]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
  }, [projects, selectedTech]);

  if (projectStatus === 'loading') {
    return (
      <Layout>
        <Spinner /> 
      </Layout>
    );
  }

  return (
    <Layout>
      {showAddForm ? (
        <AddProjectForm onClose={() => setShowAddForm(false)} />
      ) : (
        <>
          <h2>Мои проекты</h2>
          {projectError && <p className="error-message">Ошибка: {projectError}</p>}
          <RefreshButton onClick={loadProjects} />
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
