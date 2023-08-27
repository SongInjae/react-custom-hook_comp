import { useState } from "react";

type anyType = number | string | object | boolean | Array<anyType>;

const useLocalStorage = (key: string, initialState: anyType) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.error(error);
      return initialState;
    }
  });

  const setValue = (value: anyType) => {
    try {
      const valueToStore =
        typeof value === "function" ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
