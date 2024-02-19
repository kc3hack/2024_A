//import { useState } from "react";
//import reactLogo from "../public/react.svg";
//import viteLogo from "../public/vite.svg";
import "../styles/App.css";
import 'leaflet/dist/leaflet.css';
<<<<<<< HEAD
import {DraggableMarker} from './DraggableMarker';
=======
<<<<<<< HEAD
//import {DraggableMarker} from './DraggableMarker';
import { Weather } from './weather';
=======
//Mapコンポーネントをインポート
import {Map} from './Map.tsx';
>>>>>>> parent of ec11cef (位置情報の取得とマップの表示を行う)
>>>>>>> 86ac4e3 (Revert "位置情報の取得とマップの表示を行う")

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <DraggableMarker />
=======
<<<<<<< HEAD
      <Weather />
=======
      <Map />
>>>>>>> parent of ec11cef (位置情報の取得とマップの表示を行う)
>>>>>>> 86ac4e3 (Revert "位置情報の取得とマップの表示を行う")
    </div>
  );
}

export default App;

/*
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
*/
