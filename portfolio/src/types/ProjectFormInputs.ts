import { IProject } from "./Project";

export type IProjectFormInputs = Pick<IProject, "title" | "description" | "link"> & {
  technologies: string; 
};