import Topmap from "./TopMap";
import "../styles/Map.css";
import "leaflet/dist/leaflet.css";
import MapBackground from "./MapBackground.tsx";
import React from "react";
const Map = () => {
  return (
    <div className="map">
      <div className="map-background">
        <MapBackground latitude={35} longitude={135} />
      </div>
      <div className="map-main">
        <Topmap />
      </div>
    </div>
  );
};

export default Map;
