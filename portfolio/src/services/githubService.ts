import axios from 'axios';
import { IProject } from '../types/Project';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchRepos = async (username: string, token?: string): Promise<IProject[]> => {
    const response = await axios.get<IProject[]>(`${GITHUB_API_URL}/users/${username}/repos`, {
        headers: token ? { Authorization: `token ${token}` } : {},
    });

    const repos = response.data;

    return repos.map((repo: any) => ({
        id: repo.id,
        title: repo.title,
        description: repo.description || 'Описание не указано',
        technologies: repo.technologies,
        link: repo.link,
    }));
};