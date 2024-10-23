import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/themeProvaider/index";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AppRouter } from "./providers/router/index";

const App = () => {
  const { theme, ChangeThem } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={ChangeThem}>Toggle</button> 
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
