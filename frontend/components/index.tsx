import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Location from "../pages/Location";
import Search from "../pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/location/" element={<Location />}></Route>
        <Route path="/history/" element={<History />}></Route>
        <Route path="/search//*" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
