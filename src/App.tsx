import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { HomePageAsync } from "./pages/homePage/HomePage.async";
import { AboutPageAsync } from "./pages/aboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/UseTheme";
import { classNames } from "./helpers/classNames/ClassNames";

const App = () => {
  const { theme, ChangeThem } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={ChangeThem}>Toggle</button>
      <Suspense fallback={<div>Loading</div>}>
        {" "}
        {/* ////Нужен для того чтобы работали lazy загрузки  */}
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Routes>
          <Route path={"/"} element={<HomePageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
