import "../styles/App.css";
import 'leaflet/dist/leaflet.css';
//import {DraggableMarker} from './DraggableMarker';
import { Weather } from './weather';

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;