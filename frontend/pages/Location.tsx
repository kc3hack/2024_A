import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationComponent from "../components/Location";
import "../styles/Location.css";
import { store } from "../components/store";
import { Provider } from "react-redux";
import React from "react";

const Location = () => {
  return (
    <Provider store={store}>
      <Header />
      <LocationComponent />
      <Footer />
    </Provider>
  );
};

export default Location;
