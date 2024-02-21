import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/search";
import "../styles/index.css";
import Location from "../examples/Location.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Location />
  </React.StrictMode>,
);
