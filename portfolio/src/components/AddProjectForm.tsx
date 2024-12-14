import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addProject } from '../store/projectsSlice';
import { IProjectFormInputs } from '../types/ProjectFormInputs';
import { IProject } from '../types/Project';
import { v4 as uuidv4 } from 'uuid';
import '../styles/AddProjectForm.css';

interface AddProjectFormProps {
  onClose: () => void;
}

export const AddProjectForm = ({ onClose }: AddProjectFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.items);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IProjectFormInputs>();

  const generateNumericId = (): number => {
    const uuid = uuidv4();
    return parseInt(uuid.replace(/-/g, '').slice(0, 15), 16);
  };

  const validTechnologies = ['React', 'TypeScript', 'JavaScript', 'Unity', 'Vue', 'Electron'];

  const handleAddProject: SubmitHandler<IProjectFormInputs> = (data) => {
    const techArray = data.technologies.split(',').map((tech) => tech.trim());
    const isValidTech = techArray.every((tech) => validTechnologies.includes(tech));

    if (!isValidTech) {
      setError('technologies', {
        type: 'manual',
        message: `Указаны недопустимые технологии. Допустимые технологии: ${validTechnologies.join(', ')}`,
      });
      return;
    }

    const newProject: IProject = {
      id: generateNumericId(),
      title: data.title,
      description: data.description,
      technologies: techArray,
      link: data.link,
    };

    dispatch(addProject(newProject));
    localStorage.setItem('projects', JSON.stringify([...projects, newProject]));
    reset();
    onClose();
  };

  return (
    <div className="add-project-form">
      <h3>Добавить новый проект</h3>
      <form onSubmit={handleSubmit(handleAddProject)}>
        <input
          type="text"
          placeholder="Название проекта"
          {...register('title', { required: 'Название проекта обязательно' })}
          className="form-input"
        />
        {errors.title && <p className="error-message">{errors.title.message}</p>}
        <textarea
          placeholder="Описание проекта"
          {...register('description', { required: 'Описание проекта обязательно' })}
          className="form-textarea"
        />
        {errors.description && <p className="error-message">{errors.description.message}</p>}
        <input
          type="text"
          placeholder="Технологии (через запятую)"
          {...register('technologies', { required: 'Укажите технологии' })}
          className="form-input"
        />
        {errors.technologies && <p className="error-message">{errors.technologies.message}</p>}
        <input
          type="text"
          placeholder="Ссылка на проект"
          {...register('link', { required: 'Ссылка на проект обязательна' })}
          className="form-input"
        />
        {errors.link && <p className="error-message">{errors.link.message}</p>}
        <div className="form-buttons-container">
          <button type="submit" className="form-button">
            Добавить проект
          </button>
          <button type="button" onClick={onClose} className="back-button">
            Назад
          </button>
        </div>
      </form>
    </div>
  );
};
