import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvaider } from "app/providers/themeProvaider";

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>
);
