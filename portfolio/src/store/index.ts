import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import { IProject } from '../types/Project';

type PreloadedState = {
  projects: {
    items: IProject[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  };
};

const isValidProject = (project: IProject) => {
    return (
      typeof project.id === 'number' &&
      typeof project.title === 'string' &&
      typeof project.description === 'string' &&
      project.technologies.every((tech: unknown) => typeof tech === 'string') &&
      typeof project.link === 'string'
    );
};
  
const loadProjectsFromLocalStorage = (): PreloadedState['projects']['items'] => {
    try {
      const storedProjects = localStorage.getItem('projects');
      if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        if (Array.isArray(parsedProjects)) {
          return parsedProjects.filter(isValidProject);
        }
      }
    } catch (error) {
      console.error('Ошибка при чтении данных из localStorage:', error);
    }
    return [];
};

const preloadedState: PreloadedState = {
  projects: {
    items: loadProjectsFromLocalStorage(),
    status: 'idle',
    error: null,
  },
};

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    try {
        localStorage.setItem('projects', JSON.stringify(store.getState().projects.items));
    } 
    catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;