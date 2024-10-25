import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvaider/index";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AppRouter } from "./providers/router/index";
import { Navbar } from "widgets/navbar/index";
import { ThemeSwitcher } from "shared/ui/themeSwitcher/index";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
       <Navbar/>
       <AppRouter />
       <ThemeSwitcher/>
    </div>
  );
};

export default App;
