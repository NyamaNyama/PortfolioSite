import axios from 'axios';
import { IProject } from '../types/Project';

const GITHUB_API_URL = 'https://api.github.com';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}
  
export const fetchRepos = async (username: string, token?: string): Promise<IProject[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(`${GITHUB_API_URL}/users/${username}/repos`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });

    const repos = response.data;

    const projects: IProject[] = await Promise.all(
      repos.map(async (repo) => {
        try {
          const languages = await fetchRepoLanguages(username, repo.name);

          return {
            id: repo.id,
            title: repo.name,
            description: repo.description || 'Описание не указано',
            technologies: languages,
            link: repo.html_url,
          };
        } catch (error) {
          console.error(`Ошибка при загрузке языков для репозитория "${repo.name}":`, error);
          return {
            id: repo.id,
            title: repo.name,
            description: repo.description || 'Описание не указано',
            technologies: [],
            link: repo.html_url,
          };
        }
      })
    );

    return projects;
  } catch (error) {
      console.error('Ошибка при загрузке репозиториев с GitHub:', error);
      throw new Error('Не удалось загрузить репозитории с GitHub. Проверьте имя пользователя и токен.');
  }
};

const fetchRepoLanguages = async (username: string, repoName: string): Promise<string[]> => {
  const response = await axios.get<Record<string, number>>(
    `${GITHUB_API_URL}/repos/${username}/${repoName}/languages`
  );

  return Object.keys(response.data);
};