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
        <Route path="/history/" element={<History />}></Route>
        <Route path="/location/" element={<Location />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
