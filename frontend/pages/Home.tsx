import Header from "../components/Header";
import Map from "../components/Map";
import Value from "../components/Value";
import Footer from "../components/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Map />
        <Value />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
