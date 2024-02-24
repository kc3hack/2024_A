import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="not-found">
          <h1>NotFound</h1>
          <p>ページが見つかりませんでした。</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
