import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterMusic from "../components/RegisterMusic";
import { Provider } from "react-redux";
import { store } from "../components/store";

import "../styles/Location.css";
import React from "react";

const Location = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main>
          <RegisterMusic />
        </main>
        <Footer />
      </Provider>
    </div>
  );
};

export default Location;
