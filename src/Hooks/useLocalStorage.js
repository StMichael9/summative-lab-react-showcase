import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      // Return parsed data if it exists, otherwise return the initial value
      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch (e) {
      console.error(`Error reading localStorage key "${key}":`, e);
      return initialValue;
    }
  });
  // Sync state changes to localStorage whenever the value or key updates

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error setting localStorage key "${key}":`, e);
    }
  }, [key, value]);
  return [value, setValue]; // Fixed: Added missing return statement
};

// Nothing wrong with having both exports
export default useLocalStorage;
export { useLocalStorage };
