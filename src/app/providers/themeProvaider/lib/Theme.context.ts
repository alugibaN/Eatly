import { createContext } from "react";

export enum Theme {  // перечисление тем в нашем проекте при желании можно добавить новую тему 
  LIGHT = 'light',
  DARK = 'dark',
}
export interface ThemeContextProps { // интерфейс для используемого значение в контексте 
  theme:Theme;
  setTheme:  React.Dispatch<React.SetStateAction<Theme>>
}  

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps); //as ThemeContextProps: Это приведение типа (type assertion). Мы говорим TypeScript, что пустой объект {} на самом деле имеет тип ThemeContextProps. Это необходимо, потому что TypeScript не может автоматически определить тип пустого объекта.
export const LOCAL_SORAGE_THEME_KEY = 'theme'; // задаем название ключа в локальном хранилише 