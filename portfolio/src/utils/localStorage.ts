export const loadFromLocalStorage = <T>(key: string): T | null => {
    try {
      const savedData = localStorage.getItem(key);
      if (!savedData) return null;
  
      const parsedData = JSON.parse(savedData);
      if (Array.isArray(parsedData)) {
        return parsedData as T;
      } else {
        console.warn(`Данные в localStorage (ключ: ${key}) не являются массивом.`);
        return null;
      }
    } catch (error) {
      console.error(`Ошибка при разборе данных из localStorage (ключ: ${key}):`, error);
      return null;
    }
  };
  
  export const saveToLocalStorage = (key: string, data: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Ошибка при сохранении данных в localStorage (ключ: ${key}):`, error);
    }
  };
  