import { useState, useEffect } from "react";

const usePersistentState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }, 300); // Debounce writes to prevent excessive updates

    return () => clearTimeout(handler);
  }, [key, state]);

  return [state, setState];
};

export default usePersistentState;
