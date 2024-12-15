import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvaider/index";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AppRouter } from "./providers/router/index";
import { Navbar } from "widgets/navbar/index";
import { Suspense } from "react";
import Footer from "widgets/Footer/ui/Footer";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <AppRouter />
                </div>
                <Footer/>
            </Suspense>
        </div>
    );
};

export default App;
