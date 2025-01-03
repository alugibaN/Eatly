import React from "react";
import "./app/styles/index.scss";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvaider } from "app/providers/themeProvaider";
import "shared/config/i18n/i18";
import { ErrorBoundary } from "app/providers/ErrorBoundary/index";


const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvaider>
                <App />
            </ThemeProvaider>
        </ErrorBoundary>
    </BrowserRouter>
);
