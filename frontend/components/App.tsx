import "../styles/App.css";
import 'leaflet/dist/leaflet.css';
import {DraggableMarker} from './DraggableMarker';

function App() {
  return (
    <div className="App">
      <DraggableMarker />
    </div>
  );
}

export default App;