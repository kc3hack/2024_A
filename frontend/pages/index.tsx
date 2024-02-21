import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Location from "../examples/Location.tsx";
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Location />
  </React.StrictMode>,
);


