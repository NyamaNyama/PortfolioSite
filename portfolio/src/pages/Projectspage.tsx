import { useEffect, useState, useMemo } from 'react';
import { Layout } from "../components/Layout";
import { projects as dataProjects } from '../data/Projects';
import "../styles/Projects.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setProjects, addProject } from '../store/projectsSlice';
import {v4 as uuidv4} from 'uuid';



export const Projects = () => {
    const projects = useSelector((state: RootState) => state.projects.items);
    const dispatch = useDispatch<AppDispatch>();
  
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [showAddForm, setShowAddForm] = useState<boolean>(false);

    const [newProjectTitle, setNewProjectTitle] = useState<string>("");
    const [newProjectDescription, setNewProjectDescription] = useState<string>("");
    const [newProjectTechnologies, setNewProjectTechnologies] = useState<string>("");
    const [newProjectLink, setNewProjectLink] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");

    const generateNumericId = ():number => {
      const uuid = uuidv4(); 
    const numericId = parseInt(uuid.replace(/-/g, '').slice(0, 15), 16);
    return numericId;
  };

    useEffect(() => {
        if (projects.length === 0 && localStorage.getItem('projects') === null) {
            dispatch(setProjects(dataProjects));
        }
    }, [dispatch, projects.length]);
  
    const handleAddProject = () => {
      setErrorMessage(""); 
      if (
        !newProjectTitle ||
        !newProjectDescription ||
        !newProjectTechnologies ||
        !newProjectLink
      ) {
        setErrorMessage("Пожалуйста, заполните все поля.");
        return;
      }
  
      const validTechnologies = [
        "React",
        "TypeScript",
        "JavaScript",
        "Unity",
        "Vue",
        "Electron",
      ];
  
      const techArray = newProjectTechnologies
        .split(",")
        .map((tech) => tech.trim());
  
      const isValidTech = techArray.every((tech) =>
        validTechnologies.includes(tech)
      );
  
      if (!isValidTech) {
        setErrorMessage(
          `Указаны недопустимые технологии. Допустимые технологии: ${validTechnologies.join(
              ", "
          )}`
        );
        return;
      }
  
      const newProject = {
        id: generateNumericId(), 
        title: newProjectTitle,
        description: newProjectDescription,
        technologies: techArray,
        link: newProjectLink,
      };
  
      dispatch(addProject(newProject));
  
      setNewProjectTitle("");
      setNewProjectDescription("");
      setNewProjectTechnologies("");
      setNewProjectLink("");
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
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Название проекта"
                    value={newProjectTitle}
                    onChange={(e) => setNewProjectTitle(e.target.value)}
                    className="form-input"
                />
                <textarea
                    placeholder="Описание проекта"
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                    className="form-textarea"
                />
                <input
                    type="text"
                    placeholder="Технологии (через запятую)"
                    value={newProjectTechnologies}
                    onChange={(e) => setNewProjectTechnologies(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Ссылка на проект"
                    value={newProjectLink}
                    onChange={(e) => setNewProjectLink(e.target.value)}
                    className="form-input"
                />
                <div className="form-buttons-container">
                    <button onClick={handleAddProject} className="form-button">
                    Добавить проект
                    </button>
                    <button onClick={() => setShowAddForm(false)} className="back-button">
                    Назад
                    </button>
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