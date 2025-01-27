import '../styles/RefreshButton.css';

interface RefreshButtonProps {
  onClick: () => void;
}

export const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <button className="refresh-button" onClick={onClick}>
      Обновить проекты
    </button>
  );
};
