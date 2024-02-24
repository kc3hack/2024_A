import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationComponent from "../components/Location";
import { store } from "../components/store";
import { Provider } from "react-redux";
import React from "react";

const Location = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main>
          <LocationComponent />
        </main>
        <Footer />
      </Provider>
    </div>
  );
};

export default Location;
