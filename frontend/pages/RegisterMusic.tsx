import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterMusic from "../components/RegisterMusic";
import { Provider } from "react-redux";
import { store } from "../components/store";

import "../styles/Location.css";
import React from "react";

const Location = () => {
  return (
    <Provider store={store}>
      <Header />
      <RegisterMusic />
      <Footer />
    </Provider>
  );
};

export default Location;
