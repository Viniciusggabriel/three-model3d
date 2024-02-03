import useLocalStorage from "../hooks/useLocalStorage";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./button";

export function ModeToggle() {
  /* Hook personalizado */
  const [theme, setThemeState] = useLocalStorage("theme", "light");

  /* Troca o estado do hook */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
  };

  /* Adiciona e move a class dark do html e seus filhos */
  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
