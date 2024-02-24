import Topmap from "./TopMap";
import "../styles/Map.css";
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
        <Topmap />
      </div>
    </div>
  );
};

export default Map;
