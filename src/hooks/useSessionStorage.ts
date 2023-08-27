import { useState } from "react";

type anyType = number | string | object | boolean | Array<anyType>;

const useSessionStorage = (key: string, initialState: anyType) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
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
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
