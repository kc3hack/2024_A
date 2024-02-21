import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App.tsx";
import "../styles/index.css";
import Location from "../components/Location.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Location />
  </React.StrictMode>,
);
