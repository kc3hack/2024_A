import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const Test = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
