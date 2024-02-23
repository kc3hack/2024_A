import React from "react";
import SearchBar from "../components/SearchBar";
import "../styles/TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="title">
        <h1>Atmosfeel</h1>
      </div>
      <div className="top-menu-items">
        <SearchBar />
        <div>
          <img className="setting-icon" src="/gear-fill.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
