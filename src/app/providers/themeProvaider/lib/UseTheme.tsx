import { useContext } from "react";
import { LOCAL_SORAGE_THEME_KEY, Theme, ThemeContext } from "./Theme.context";

interface UseThemeResult {
  ChangeThem: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  // кастомный хук если нужно будет в какой-то компонент передать возможность изменение темы или для того чтобы передать занчение установленной темы
  const { theme, setTheme } = useContext(ThemeContext);
  const ChangeThem = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_SORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    ChangeThem,
  };
};
