import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Location from "../examples/Location.tsx";
import App from "../components/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Location />
    <App />
  </React.StrictMode>,
);
