import { useEffect, useState, useMemo } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Layout } from "../components/Layout";
import { projects as dataProjects } from '../data/Projects';
import "../styles/Projects.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProjects, addProject } from '../store/projectsSlice';
import {v4 as uuidv4} from 'uuid';
import { IProject } from '../types/Project';
import {IProjectFormInputs} from '../types/ProjectFormInputs';


export const Projects = () => {
    const projects = useSelector((state: RootState) => state.projects.items);
    const dispatch = useDispatch<AppDispatch>();
  
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [showAddForm, setShowAddForm] = useState<boolean>(false);

    const {
      register,
      handleSubmit,
      reset,
      setError,
      formState: { errors },
    } = useForm<IProjectFormInputs>();

    const generateNumericId = ():number => {
      const uuid = uuidv4(); 
    const numericId = parseInt(uuid.replace(/-/g, '').slice(0, 15), 16);
    return numericId;
  };

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
  
    if (savedProjects) {
      dispatch(setProjects(JSON.parse(savedProjects)));
    } else if (projects.length === 0) {
      dispatch(setProjects(dataProjects));
    }
  }, [dispatch, projects.length]);
  
     const handleAddProject: SubmitHandler<IProjectFormInputs> = (data) => {

      const validTechnologies = [
        "React",
        "TypeScript",
        "JavaScript",
        "Unity",
        "Vue",
        "Electron",
      ];

      const techArray = data.technologies
      .split(",") 
      .map((tech) => tech.trim());

      const isValidTech = techArray.every((tech) =>
        validTechnologies.includes(tech)
    );
  
    if (!isValidTech) {
      setError("technologies", {
          type: "manual",
          message: `Указаны недопустимые технологии. Допустимые технологии: ${validTechnologies.join(", ")}`,
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
      localStorage.setItem("projects", JSON.stringify([...projects, newProject]));
      reset();
      setShowAddForm(false);
    };
  
    const filteredProjects = useMemo(() => {
      return projects.filter((project) =>
        selectedTech === "All"
          ? true
          : project.technologies.includes(selectedTech)
      );
    }, [projects, selectedTech]);
  
    return (
      <Layout>
        {showAddForm ? (
            <div className="add-project-form">
                <h3>Добавить новый проект</h3>
                <form onSubmit={handleSubmit(handleAddProject)}>
                <input
                    type="text"
                    placeholder="Название проекта"
                    {...register("title", { required: "Название проекта обязательно" })}
                    className="form-input"
                />
                {errors.title && <p className="error-message">{errors.title.message}</p>}
                <textarea
                    placeholder="Описание проекта"
                    {...register("description", { required: "Описание проекта обязательно" })}
                    className="form-textarea"
                />
                 {errors.description && <p className="error-message">{errors.description.message}</p>}
                <input
                    type="text"
                    placeholder="Технологии (через запятую)"
                    {...register("technologies", { required: "Укажите технологии" })}
                    className="form-input"
                />
                {errors.technologies && <p className="error-message">{errors.technologies.message}</p>}
                <input
                    type="text"
                    placeholder="Ссылка на проект"
                    {...register("link", { required: "Ссылка на проект обязательна" })}
                    className="form-input"
                />
                {errors.link && <p className="error-message">{errors.link.message}</p>}
                <div className="form-buttons-container">
                            <button type="submit" className="form-button">Добавить проект</button>
                            <button type="button" onClick={() => setShowAddForm(false)} className="back-button">Назад</button>
                </div>
                </form>
            </div>
            ) : (
            <>
                <h2>Мои проекты</h2>
                <button onClick={() => setShowAddForm(true)} className="form-button">
                Добавить проект
                </button>
                <div className="filter">
                <label htmlFor="technology-filter">Выберите технологию:</label>
                <select
                    id="technology-filter"
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                    className="form-input"
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
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="tech">Технологии: {project.technologies.join(", ")}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Перейти на GitHub
                    </a>
                    </div>
                ))}
                </div>
            </>
        )}
      </Layout>
    );
  };