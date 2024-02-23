import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
