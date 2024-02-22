import "../styles/Map.css";
import Weather from "./weather";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className="map">
      <div className="map-background">
        ここは場所に合った
        <br />
        背景をのせる予定
      </div>
      <div className="map-main">
        <Weather />
      </div>
    </div>
  );
};

export default Map;
