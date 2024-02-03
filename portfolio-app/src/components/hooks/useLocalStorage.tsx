import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string): string | any => {
  /* Verifica o que tem dentro do storage */
  const storedValue =
    typeof localStorage !== "undefined" ? localStorage.getItem(key) : null;
  /* pega o valor do storage ou o valor inicial passado */
  const initial = storedValue !== null ? storedValue : initialValue;

  /* Estado que começa com o valor inicial */
  const [value, setValue] = useState(initial);

  /* Função que troca o valor inicial */
  const setStoredValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  /* Retorna o valor e a função que troca o valor */
  return [value, setStoredValue];
};

export default useLocalStorage;
