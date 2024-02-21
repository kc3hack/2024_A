import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Location from "../pages/Location";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test/" element={<Test />}></Route>
        <Route path="/history/" element={<History />}></Route>
        <Route path="/location/" element={<Location />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

/*テスト用ページ */
const Test = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
