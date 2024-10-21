import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvaider from "./theme/ThemeProvider";

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>
);
