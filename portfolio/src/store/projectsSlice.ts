import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../types/Project';
interface ProjectsState {
items: IProject[];
}
const initialState: ProjectsState = {
items: [],
};
const projectsSlice = createSlice({
name: 'projects',
initialState,
reducers: {
setProjects(state, action: PayloadAction<IProject[]>) {
state.items = action.payload;
},
addProject(state, action: PayloadAction<IProject>) {
state.items.push(action.payload);
},
},
});
export const { setProjects, addProject } = 
projectsSlice.actions;
export default projectsSlice.reducer;