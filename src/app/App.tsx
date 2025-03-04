import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvaider/index";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AppRouter } from "./providers/router/index";
import { Suspense} from "react";

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
