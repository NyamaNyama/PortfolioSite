import '../styles/Filter.css';

interface ProjectFilterProps {
  selectedTech: string;
  onFilterChange: (tech: string) => void;
}

export const ProjectFilter = ({ selectedTech, onFilterChange }: ProjectFilterProps) => {
  return (
    <div className="filter">
      <label htmlFor="technology-filter">Выберите технологию:</label>
      <select
        id="technology-filter"
        value={selectedTech}
        onChange={(e) => onFilterChange(e.target.value)}
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
  );
};
