import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для регистрации результатов (например, reportWebVitals(console.log))
// или отправьте в конечную точку аналитики. Подробнее: https://bit.ly/CRA-vitals
// reportWebVitals();
