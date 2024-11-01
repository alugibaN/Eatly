import React from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvaider/index";
import { classNames } from "shared/lib/classNames/ClassNames";
import { AppRouter } from "./providers/router/index";
import { Navbar } from "widgets/navbar/index";
import { Sidebar } from "widgets/sidebar/index";
import { Suspense } from "react";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
