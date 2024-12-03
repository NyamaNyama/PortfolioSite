import "../styles/ThankYouMessage.css"

interface ThankYouMessageProps {
    onReset: () => void;
  }
  
  export const ThankYouMessage = ({ onReset }: ThankYouMessageProps) => (
    <div className="thank-you-message">
      <p>Спасибо за ваше сообщение! Оно успешно отправлено и скоро будет проверено мной!</p>
      <button className = "resetButton" onClick={onReset}>Отправить новое сообщение</button>
    </div>
  );