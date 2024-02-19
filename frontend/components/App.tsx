import "../styles/App.css";
import "leaflet/dist/leaflet.css";
//import { DraggableMarker } from "./DraggableMarker";
import { Weather } from "./weather";

//Mapコンポーネントをインポート
import { Map } from "./Map.tsx";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
