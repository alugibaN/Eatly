import { FC, useMemo, useState, ReactNode } from "react";
import { LOCAL_SORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/Theme.context";

const defaultTheme = localStorage.getItem(LOCAL_SORAGE_THEME_KEY) as Theme || Theme.LIGHT // Получаем значение с локального хранилища если значение пустое то как значение по умолчанию ставим светлую тему 

const ThemeProvaider:FC<{children:ReactNode}> = ({children}) => { // в числдрене приходит разметка всего нашего проекта а именно компонента <App/>
  const [theme, setTheme] = useState<Theme>(defaultTheme) // Указываем в стайте значение локального хранилища 


const defaultProps = useMemo(()=>({ // код в useMemo чтобы избежать не нужных перерисовок ведь useMemo сохраняет результаты вычесления объекта defaultTheme
    theme: theme,
    setTheme: setTheme,
}),[theme])


  return (
    <ThemeContext.Provider value ={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvaider;